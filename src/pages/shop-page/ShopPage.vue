<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { APP_HERO_IMAGES } from '@/components/app-hero/AppHero.constants'
  import ProductList from '@/pages/shop-page/components/product-list/ProductList.vue'
  import SortingBar from '@/pages/shop-page/components/sorting-bar/SortingBar.vue'
  import { ref, watch, computed, onMounted, provide } from 'vue'
  import type { SortOption } from '@/stores/productStore.types'
  import type { ViewType } from '@/pages/shop-page/components/product-list/ProductList.types'
  import { PRODUCT_LIST_ITEMS_NUMBER } from './components/product-list/ProductList.constants'
  import ProductFilters from './components/product-filters/ProductFilters.vue'

  const initialSort = (): SortOption => {
    const savedSort = localStorage.getItem('selectedSort')
    return (savedSort as SortOption) || 'popularity'
  }

  const initialViewType = (): ViewType => {
    const savedView = localStorage.getItem('viewType')
    return (savedView as ViewType) || 'grid'
  }

  const selectedSort = ref<SortOption>(initialSort())
  const viewType = ref<ViewType>(initialViewType())
  const currentPage = ref<number>(1)
  const pageSize = computed<number>(() =>
    viewType.value === 'grid' ? PRODUCT_LIST_ITEMS_NUMBER.GRID : PRODUCT_LIST_ITEMS_NUMBER.LIST
  )

  const mainBlockRef = ref<HTMLElement | null>(null)
  provide('mainBlockRef', mainBlockRef)

  watch([selectedSort, viewType], () => {
    currentPage.value = 1
  })

  watch(currentPage, (newPage) => {
    localStorage.setItem('currentPage', newPage.toString())
  })

  watch(selectedSort, (newSort) => {
    localStorage.setItem('selectedSort', newSort)
  })

  watch(viewType, (newView) => {
    localStorage.setItem('viewType', newView)
  })

  onMounted(() => {
    const savedPage = localStorage.getItem('currentPage')
    if (savedPage) {
      const parsedPage = parseInt(savedPage)
      currentPage.value = Math.max(1, isNaN(parsedPage) ? 1 : parsedPage)
    }
  })

  const initialFilters = () => {
    const savedFilters = localStorage.getItem('productFilters')
    return savedFilters
      ? JSON.parse(savedFilters)
      : {
          category: [],
          colors: [],
          sizes: [],
          brands: [],
          searchQuery: '',
          minPrice: null,
          maxPrice: null
        }
  }

  const filters = ref(initialFilters())

  watch(
    filters,
    (newFilters) => {
      localStorage.setItem('productFilters', JSON.stringify(newFilters))
      currentPage.value = 1
    },
    { deep: true }
  )
</script>

<template>
  <main class="shop-page">
    <AppHero title="Fashion" :imageURL="APP_HERO_IMAGES.SHOP" />
    <div class="shop-page__main-block" ref="mainBlockRef">
      <aside class="filters-sidebar">
        <ProductFilters v-model="filters" />
      </aside>
      <div class="shop-content">
        <SortingBar v-model:sortBy="selectedSort" v-model:viewType="viewType" />
        <ProductList
          :sortBy="selectedSort"
          :viewType="viewType"
          :currentPage="currentPage"
          :pageSize="pageSize"
          :filters="filters"
          @update:page="(newPage) => (currentPage = newPage)"
        />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;
  @use '@/styles/spacing.scss' as spacing;

  .shop-page {
    &__main-block {
      background-color: colors.$additionalBgColor;
      display: flex;
      gap: 30px;
      padding: 30px 26px;
    }

    .filters-sidebar {
      flex-shrink: 0;
      width: 280px;

      @include spacing.tablet {
        width: 220px;
      }

      @include spacing.phone {
        display: none;
      }
    }

    .shop-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 40px;
    }
  }
</style>
