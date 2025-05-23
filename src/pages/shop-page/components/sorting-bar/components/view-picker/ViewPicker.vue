<script setup lang="ts">
  import type { ViewType } from '@/pages/shop-page/components/product-list/ProductList.types'
  import RadioButton from './components/RadioButton.vue'
  import { VIEW_PICKER_OPTIONS } from './ViewPicker.constants'

  const viewType = defineModel<ViewType>('viewType', { required: true })
</script>

<template>
  <div class="view-picker">
    <RadioButton
      v-for="view in VIEW_PICKER_OPTIONS"
      :key="view.type"
      v-model:viewType="viewType"
      class="view-picker__button"
      :class="[`view-picker_${view.type}`]"
      :view="view.type"
      ><component :is="view.icon" :class="`view-picker__button_${view.type}`"
    /></RadioButton>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .view-picker {
    display: flex;
    gap: 7px;

    &__button {
      align-items: center;
      background-color: colors.$primaryFontColor;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      height: 51px;
      justify-content: center;
      transition: background-color 0.3s ease;
      width: 51px;

      &_grid {
        height: 24px;
        width: 24px;
      }

      &_list {
        height: 17px;
        width: 22px;
      }
    }
  }
</style>
