<script setup lang="ts">
  import { SortOption } from '@/stores/productStore.types'
  import SortingSelect from './components/sorting-select/SortingSelect.vue'

  const sortBy = defineModel<SortOption>('sortBy', { required: true })
</script>

<template>
  <div class="select-group">
    <h6 class="select-group__label">Sort by:</h6>
    <SortingSelect v-model:sortBy="sortBy" />
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .select-group {
    align-items: center;
    display: flex;
    gap: 18px;

    &__label {
      color: colors.$tertiaryFontColor;
      font-family: Roboto, sans-serif;
      font-size: 0.95em;
      font-weight: 500;
      letter-spacing: 0.1px;
      line-height: 1.05em;
      margin: 0;
    }
  }
</style>
