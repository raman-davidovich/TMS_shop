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
  <ul class="latest-products">
    <template v-if="!productStore.isLoading">
      <AppProductCard
        v-for="product in latestProducts"
        :key="product.id"
        v-bind="product"
        :cardType="CARD_TYPES.LATEST"
      />
    </template>

    <div v-else>Loading latest products...</div>

    <div v-if="productStore.error">{{ productStore.error }}</div>
  </ul>
</template>

<style scoped lang="scss">
  @use '@styles/spacing.scss' as spacing;

  .latest-products {
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
</style>
