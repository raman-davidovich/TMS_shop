<script setup lang="ts">
  import { ref, computed } from 'vue'
  import AppProductCard from '../shared/app-product-card/AppProductCard.vue'
  import { useFilterProducts } from './composables/useFilterProducts'
  import { TABS } from './components/featured-products-tabs/FeaturedProductsTabs.constants'
  import FeaturedProductsTabs from './components/featured-products-tabs/FeaturedProductsTabs.vue'
  import { CARD_TYPES } from '../shared/app-product-card/AppProductCard.types'

  const activeTab = ref<TABS>(TABS.FEATURED)

  const filteredProducts = computed<ReturnType<typeof useFilterProducts>>(() =>
    useFilterProducts(activeTab.value)
  )
</script>

<template>
  <div class="featured-products">
    <FeaturedProductsTabs v-model="activeTab" />
    <TransitionGroup name="list" tag="ul" class="featured-products__product-list">
      <AppProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        v-bind="product"
        :cardType="CARD_TYPES.FEATURED"
      />
    </TransitionGroup>
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
