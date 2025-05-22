<script setup lang="ts">
  import FeaturedProductsTab from '../featured-products-tab/FeaturedProductsTab.vue'
  import { FEATURED_PRODUCTS_TABS } from './FeaturedProductsTabs.constants'

  const model = defineModel<FEATURED_PRODUCTS_TABS>({ required: true })

  const handleClick = (tab: FEATURED_PRODUCTS_TABS) => {
    model.value = tab
  }
</script>

<template>
  <ul class="featured-products-tabs">
    <FeaturedProductsTab
      v-for="tab in Object.values(FEATURED_PRODUCTS_TABS)"
      :key="tab"
      :title="tab"
      :isActive="model === tab"
      @click="handleClick(tab)"
    />
  </ul>
</template>

<style scoped lang="scss">
  .featured-products-tabs {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 0 10px;
    padding: 0;
  }
</style>
