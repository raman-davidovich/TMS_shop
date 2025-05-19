<script setup lang="ts">
  import AppProductCard from '@/components/shared/app-product-card/AppProductCard.vue'
  import { useProductStore } from '@/stores/productStore'
  import { CARD_TYPES } from '@/components/shared/app-product-card/AppProductCard.types'
  import type { SortOption } from '@/stores/productStore.types'
  import { computed } from 'vue'
  import type { ProductType } from '@/components/shared/app-product-card/AppProductCard.types'
  import type { ViewType } from './ProductList.types'

  const props = defineProps<{
    sortBy: SortOption
    viewType: ViewType
  }>()

  const productStore = useProductStore()

  const sortedProducts = computed<ProductType[]>(() => {
    return productStore.getSortedProducts(props.sortBy)
  })
</script>

<template>
  <TransitionGroup
    v-if="!productStore.isLoading"
    name="list"
    tag="ul"
    class="product-list"
    :class="[`product-list_${viewType}`]"
  >
    <AppProductCard
      v-for="product in sortedProducts"
      :key="product.id"
      v-bind="product"
      :cardType="viewType === 'grid' ? CARD_TYPES.LATEST : CARD_TYPES.LONG"
    />
  </TransitionGroup>

  <div v-else>Loading products...</div>

  <div v-if="productStore.error">{{ productStore.error }}</div>
</template>

<style scoped lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 45px;
    padding: 0;

    &_grid {
      margin: 0 2px;
    }

    &_list {
      margin: 0 4.5px;
    }
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: all 0.5s ease;
  }

  .list-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }

  .list-leave-active {
    position: absolute;
    width: calc(100% / 4 - 40px); // width of one ProductCard
  }
</style>
