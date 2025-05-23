<script setup lang="ts">
  import { defineModel } from 'vue'
  import type { ViewType } from '@/pages/shop-page/components/product-list/ProductList.types'

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
      class="radio-button__input"
    />
    <slot />
  </label>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .radio-button {
    display: block;
    position: relative;

    &:has(:focus-visible) {
      box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
    }

    &[data-selected='true'] {
      background-color: colors.$activeBgColor;

      :deep(svg) * {
        stroke: colors.$accentElementColor;
      }
    }

    &__input {
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
</style>
