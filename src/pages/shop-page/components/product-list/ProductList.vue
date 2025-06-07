<script setup lang="ts">
  import AppProductCard from '@/components/shared/app-product-card/AppProductCard.vue'
  import { useProductStore } from '@/stores/productStore'
  import { CARD_TYPES } from '@/components/shared/app-product-card/AppProductCard.types'
  import type { SortOption } from '@/stores/productStore.types'
  import { computed, watch, onBeforeUpdate, inject, type Ref, nextTick } from 'vue'
  import type {
    ProductType,
    PRODUCT_COLORS,
    PRODUCT_SIZES,
    PRODUCT_BRANDS,
    PRODUCT_CATEGORIES
  } from '@/components/shared/app-product-card/AppProductCard.types'
  import type { ViewType } from './ProductList.types'
  import ListPagination from '../list-pagination/ListPagination.vue'

  const props = defineProps<{
    sortBy: SortOption
    viewType: ViewType
    currentPage: number
    pageSize: number
    filters: {
      category?: string[]
      colors?: PRODUCT_COLORS[]
      sizes?: PRODUCT_SIZES[]
      brands?: PRODUCT_BRANDS[]
      searchQuery?: string
      maxPrice?: number
      minPrice?: number
    }
  }>()

  const emit = defineEmits<{
    (e: 'update:page', value: number): void
  }>()

  const productStore = useProductStore()

  const baseProducts = computed<ProductType[]>(() => productStore.products)

  const filteredProducts = computed<ProductType[]>(() => {
    return baseProducts.value.filter((product) => {
      if (
        props.filters.searchQuery &&
        !product.name.toLowerCase().includes(props.filters.searchQuery.toLowerCase())
      ) {
        return false
      }

      if (
        props.filters.category &&
        props.filters.category.length > 0 &&
        !props.filters.category.includes(product.category as PRODUCT_CATEGORIES)
      ) {
        return false
      }

      if (
        props.filters.colors &&
        props.filters.colors.length > 0 &&
        !props.filters.colors.some((color) =>
          product.availableColors.includes(color as PRODUCT_COLORS)
        )
      ) {
        return false
      }

      if (
        props.filters.sizes &&
        props.filters.sizes.length > 0 &&
        !props.filters.sizes.some((size) => product.availableSizes.includes(size as PRODUCT_SIZES))
      ) {
        return false
      }

      if (
        props.filters.brands &&
        props.filters.brands.length > 0 &&
        !props.filters.brands.includes(product.brand as PRODUCT_BRANDS)
      ) {
        return false
      }

      if (
        props.filters.minPrice !== undefined &&
        Math.trunc(product.price.value / 100) < props.filters.minPrice
      ) {
        return false
      }

      if (
        props.filters.maxPrice !== undefined &&
        Math.trunc(product.price.value / 100) > props.filters.maxPrice
      ) {
        return false
      }

      return true
    })
  })

  const sortedProducts = computed<ProductType[]>(() => {
    return productStore.getSortedProducts(props.sortBy, filteredProducts.value)
  })
  const totalPages = computed<number>(() => Math.ceil(sortedProducts.value.length / props.pageSize))

  const paginatedProducts = computed<ProductType[]>(() => {
    const startIndex: number = (props.currentPage - 1) * props.pageSize
    const finishIndex: number = startIndex + props.pageSize
    return sortedProducts.value.slice(startIndex, finishIndex)
  })

  watch(totalPages, (newTotal) => {
    if (props.currentPage > newTotal && newTotal > 0) {
      emit('update:page', newTotal)
    }
  })

  const mainBlockRef = inject<Ref<HTMLElement | null>>('mainBlockRef')

  const handlePageChangeWithScroll = async (newPage: number) => {
    emit('update:page', newPage)

    await nextTick()

    let topPosition: number = 0

    if (mainBlockRef?.value) {
      const rect: DOMRect = mainBlockRef.value.getBoundingClientRect()
      const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop
      topPosition = rect.top + scrollTop
    }

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    })
  }

  let isViewChanging = false

  const onBeforeEnter = (el: Element) => {
    if (isViewChanging) {
      el.classList.add('view-change')
    }
  }

  const onAfterEnter = (el: Element) => {
    el.classList.remove('view-change')
  }

  onBeforeUpdate(() => {
    isViewChanging = true
    setTimeout(() => (isViewChanging = false), 500)
  })
</script>

<template>
  <TransitionGroup
    v-if="!productStore.isLoading"
    name="list"
    tag="ul"
    class="product-list"
    :class="[`product-list_${viewType}`]"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
  >
    <AppProductCard
      v-for="product in paginatedProducts"
      :key="product.id"
      v-bind="product"
      :cardType="viewType === 'grid' ? CARD_TYPES.LATEST : CARD_TYPES.LONG"
    />
  </TransitionGroup>

  <ListPagination
    v-if="!productStore.isLoading"
    :currentPage="currentPage"
    :totalPages="totalPages"
    @update:page="handlePageChangeWithScroll"
  />

  <div v-else class="product-list__message">Loading products...</div>

  <div v-if="productStore.error">{{ productStore.error }}</div>
</template>

<style scoped lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 45px;
    padding: 0;
    position: relative;
    scroll-snap-align: start;

    &_grid {
      margin: 0 2px;
    }

    &_list {
      flex-direction: column;
      gap: 10px;
      margin: 0 4.5px;
    }

    &__message {
      align-self: center;
    }
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    transition-duration: 0.4s;
    z-index: 1;
  }

  .list-enter-from {
    opacity: 0;
    transform: scale(0.8) translate(-30px);
  }

  .list-leave-to {
    opacity: 0;
    transform: scale(0.8) translate(-30px);
  }

  .list-leave-active {
    position: absolute;
    width: 100%;
  }

  /* stylelint-disable-next-line no-duplicate-selectors */
  .product-list_grid {
    .list-move {
      transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }

  /* stylelint-disable-next-line no-duplicate-selectors */
  .product-list_list {
    .list-move {
      transition: transform 0.4s ease-in-out;
    }
  }

  .list-enter-active.view-change {
    transform-origin: center;
    transition: all 0.4s ease-in-out;
  }

  .list-enter-from.view-change {
    opacity: 0;
    transform: rotateY(90deg) scale(0.5);
  }

  .list-leave-active.view-change {
    opacity: 0;
    position: absolute;
    transform: rotateY(-90deg) scale(0.5);
    transition: all 0.4s ease-in-out;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
  }

  @keyframes smooth-scroll {
    from {
      scroll-position: 0;
    }

    to {
      scroll-position: 100%;
    }
  }

  .list-pagination {
    button {
      transition: all 0.4s ease-in-out;
    }
  }

  /* stylelint-disable-next-line no-duplicate-selectors */
  .product-list_grid {
    /* stylelint-disable-next-line no-duplicate-selectors */
    .list-move {
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 2);
    }
  }

  /* stylelint-disable-next-line no-duplicate-selectors */
  .product-list_list {
    /* stylelint-disable-next-line no-duplicate-selectors */
    .list-move {
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
</style>
