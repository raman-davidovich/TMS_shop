<script setup lang="ts">
  import { defineModel } from 'vue'
  import type { SortOption } from '@/stores/productStore.types'
  import type { ViewType } from '@/components/product-list/ProductList.types'
  import SelectGroup from './components/select-group/SelectGroup.vue'
  import ViewPicker from './components/view-picker/ViewPicker.vue'

  const sortBy = defineModel<SortOption>('sortBy', { required: true })
  const viewType = defineModel<ViewType>('viewType', { required: true })
</script>

<template>
  <div class="sorting-bar">
    <SelectGroup v-model:sortBy="sortBy" />
    <ViewPicker v-model:viewType="viewType" />
  </div>
</template>

<style scoped lang="scss">
  .sorting-bar {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
