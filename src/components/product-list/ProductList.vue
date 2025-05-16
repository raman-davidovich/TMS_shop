<script setup lang="ts">
  import AppProductCard from '@/components/shared/app-product-card/AppProductCard.vue'
  import { useProductStore } from '@/stores/productStore'
  import { CARD_TYPES } from '@/components/shared/app-product-card/AppProductCard.types'

  const productStore = useProductStore()
</script>

<template>
  <ul class="product-list">
    <template v-if="!productStore.isLoading">
      <AppProductCard
        v-for="product in productStore.products"
        :key="product.id"
        v-bind="product"
        :cardType="CARD_TYPES.LATEST"
      />
    </template>

    <div v-else>Loading products...</div>

    <div v-if="productStore.error">{{ productStore.error }}</div>
  </ul>
</template>

<style scoped lang="scss">
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 45px;
  }
</style>
