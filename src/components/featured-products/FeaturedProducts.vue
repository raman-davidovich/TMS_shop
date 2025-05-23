<script setup lang="ts">
  import { ref } from 'vue'
  import AppProductCard from '../shared/app-product-card/AppProductCard.vue'
  import { useFilterProducts } from './composables/useFilterProducts'
  import { FEATURED_PRODUCTS_TABS } from './components/featured-products-tabs/FeaturedProductsTabs.constants'
  import FeaturedProductsTabs from './components/featured-products-tabs/FeaturedProductsTabs.vue'
  import { CARD_TYPES } from '../shared/app-product-card/AppProductCard.types'
  import { useProductStore } from '@/stores/productStore'

  const productStore = useProductStore()
  const activeTab = ref<FEATURED_PRODUCTS_TABS>(FEATURED_PRODUCTS_TABS.FEATURED)

  const filteredProducts = useFilterProducts(activeTab, () => productStore.featuredProducts)
</script>

<template>
  <div class="featured-products">
    <FeaturedProductsTabs v-model="activeTab" />
    <div v-if="productStore.isLoading" class="featured-products__message">
      Loading featured products...
    </div>
    <TransitionGroup name="list" tag="ul" class="featured-products__product-list">
      <AppProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        v-bind="product"
        :cardType="CARD_TYPES.FEATURED"
      />
    </TransitionGroup>
    <div v-if="productStore.error">{{ productStore.error }}</div>
  </div>
</template>

<style scoped lang="scss">
  @use '@styles/spacing.scss' as spacing;

  .featured-products {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include spacing.phone {
      gap: 30px;
    }

    &__message {
      align-self: center;
    }

    &__product-list {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin: 0;
      padding: 0;

      @include spacing.wall {
        justify-content: center;
      }
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
