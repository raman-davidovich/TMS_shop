<script setup lang="ts">
  import { LATEST_PRODUCTS } from '../shared/app-product-card/AppProductCard.constants'
  import { CARD_TYPES } from '../shared/app-product-card/AppProductCard.types'
  import AppProductCard from '../shared/app-product-card/AppProductCard.vue'
</script>

<template>
  <ul class="latest-products">
    <AppProductCard
      v-for="product in LATEST_PRODUCTS"
      :key="product.id"
      v-bind="product"
      :cardType="CARD_TYPES.LATEST"
    />
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
