<script setup lang="ts">
  import { defineModel } from 'vue'
  import type { ViewType } from '@/components/product-list/ProductList.types'

  defineProps<{
    view: ViewType
  }>()

  const viewType = defineModel<ViewType>('viewType', { required: true })
</script>

<template>
  <label class="radio-button" :data-selected="viewType === view">
    <input
      type="radio"
      name="viewType"
      :value="view"
      :checked="viewType === view"
      @change="viewType = view"
      hidden
    />
    <slot />
  </label>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .radio-button {
    &[data-selected='true'] {
      background-color: colors.$activeBgColor;

      :deep(svg) * {
        stroke: colors.$accentElementColor;
      }
    }
  }
</style>
