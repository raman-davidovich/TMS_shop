<script setup lang="ts">
  import { PRODUCT_COLORS } from '../../AppProductCard.types'

  defineProps<{
    backgroundColor: PRODUCT_COLORS
  }>()
</script>

<template>
  <li class="color-palette-item" :class="`color-palette-item_background-color_${backgroundColor}`"></li>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;

  .color-palette-item {
    border: 2px solid colors.$primaryFontColor;
    border-radius: 50%;
    height: 26px;
    list-style-type: none;
    width: 26px;

    &_background-color {
      &_blue {
        background-color: colors.$accentElementColor;
      }

      &_black {
        background-color: colors.$secondaryFontColor;
      }

      &_green {
        background-color: colors.$greenPaletteColor;
      }

      &_brown {
        background-color: colors.$brownPaletteColor;
      }
    }
  }
</style>
