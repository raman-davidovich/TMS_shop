<script setup lang="ts">
  import { PRODUCT_SIZES } from '../../AppProductCard.types'

  defineProps<{
    sizeTitle: PRODUCT_SIZES
  }>()
</script>

<template>
  <li class="size-item">
    <span class="size-item__title">{{ sizeTitle }}</span>
  </li>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;

  .size-item {
    align-items: center;
    border: 1px solid colors.$primaryBorderColor;
    display: flex;
    height: 29px;
    justify-content: center;
    width: 34px;

    &__title {
      color: colors.$tertiaryFontColor;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 0.2px;
      line-height: 2.2em;
    }
  }
</style>
