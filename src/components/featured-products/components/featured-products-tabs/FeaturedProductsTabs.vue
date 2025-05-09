<script setup lang="ts">
  import { computed } from 'vue'
  import FeaturedProductsTab from '../featured-products-tab/FeaturedProductsTab.vue'
  import { TABS } from './FeaturedProductsTabs.constants'

  defineProps<{
    modelValue: TABS
  }>()

  const emit = defineEmits(['update:modelValue'])

  const tabs = computed(() => Object.values(TABS))

  const handleClick = (tab: TABS) => {
    emit('update:modelValue', tab)
  }
</script>

<template>
  <ul class="featured-products-tabs">
    <FeaturedProductsTab
      v-for="tab in tabs"
      :key="tab"
      :title="tab"
      :active="modelValue === tab"
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

    li {
      list-style: none;
      transition: transform 0.3s ease;

      &:hover:not(.active) {
        transform: translateY(-5px);
      }
    }
  }
</style>
