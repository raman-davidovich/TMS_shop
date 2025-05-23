<script setup lang="ts">
  import { SORT_OPTIONS } from '../../../../SortingBar.constants'
  import type { SortOption } from '@/stores/productStore.types'
  import ArrowsIcon from './components/ArrowsIcon.vue'

  const sortByModel = defineModel<SortOption>('sortBy', { required: true })
</script>

<template>
  <div class="sorting-select">
    <select
      class="sorting-select__select"
      :value="sortByModel"
      @change="sortByModel = ($event.target as HTMLSelectElement).value as SortOption"
    >
      <option v-for="option in SORT_OPTIONS" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <ArrowsIcon class="sorting-select__arrows" />
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .sorting-select {
    display: inline-block;
    position: relative;

    &__select {
      appearance: none;
      background: colors.$primaryFontColor;
      border: 1px solid colors.$secondaryBorderColor;
      border-radius: 5px;
      box-shadow: 0 2px 4px 0 #0000001a;
      color: colors.$secondaryFontColor;
      cursor: pointer;
      font-family: Roboto, sans-serif;
      font-size: 0.95em;
      font-weight: 500;
      padding: 17px 20px;
      width: 162px;

      &:focus-visible {
        box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
        outline: none;
      }
    }

    &__arrows {
      color: colors.$primaryIconColor;
      display: flex;
      flex-direction: column;
      gap: 4px;
      pointer-events: none;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
