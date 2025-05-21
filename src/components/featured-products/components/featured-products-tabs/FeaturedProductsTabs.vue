<script setup lang="ts">
  import { computed } from 'vue'
  import FeaturedProductsTab from '../featured-products-tab/FeaturedProductsTab.vue'
  import { FEATURED_PRODUCTS_TABS } from './FeaturedProductsTabs.constants'

  defineProps<{
    modelValue: FEATURED_PRODUCTS_TABS
  }>()

  const emit = defineEmits(['update:modelValue'])

  const tabs = computed(() => Object.values(FEATURED_PRODUCTS_TABS))

  const handleClick = (tab: FEATURED_PRODUCTS_TABS) => {
    emit('update:modelValue', tab)
  }
</script>

<template>
  <ul class="featured-products-tabs">
    <FeaturedProductsTab
      v-for="tab in tabs"
      :key="tab"
      :title="tab"
      :isActive="modelValue === tab"
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
