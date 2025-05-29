<script setup lang="ts">
  import { computed } from 'vue'
  import { CARD_TYPES } from '../shared/app-product-card/AppProductCard.types'
  import AppProductCard from '../shared/app-product-card/AppProductCard.vue'
  import { useProductStore } from '@/stores/productStore'
  import { FirebaseProductType } from '../shared/app-product-card/AppProductCard.types'

  const productStore = useProductStore()

  const latestProducts = computed<FirebaseProductType[]>(() => productStore.latestProducts)
</script>

<template>
  <p v-if="productStore.error || productStore.isLoading" class="latest-products__message">
    {{ productStore.error || 'Loading latest products...' }}
  </p>
  <ul v-else class="latest-products__list">
    <AppProductCard
      v-for="product in latestProducts"
      :key="product.id"
      v-bind="product"
      :cardType="CARD_TYPES.LATEST"
    />
  </ul>
</template>

<style scoped lang="scss">
  @use '@styles/spacing.scss' as spacing;

  .latest-products {
    &__message {
      align-self: center;
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      gap: 50px 40px;
      justify-content: center;
      margin: 0;
      padding: 0;

      @include spacing.phone {
        row-gap: 40px;
      }
    }
  }
</style>
