<script setup lang="ts">
  import { ProductInfoType, CARD_TYPES } from '../../AppProductCard.types'
  import SizeItem from '../size-item/SizeItem.vue'
  import ColorPaletteItem from '../color-palette-item/ColorPaletteItem.vue'

  const { name, baseColor, price, availableColors, availableSizes, cardType } = defineProps<
    ProductInfoType & { cardType?: CARD_TYPES; price: string }
  >()
</script>

<template>
  <div class="product-info" :class="[`product-info_${cardType}`]">
    <h3 class="product-info__title" :class="[`product-info__title_${cardType}`]" :title="name">
      {{ name }}
      <br v-if="cardType !== CARD_TYPES.LONG" />
      <span class="product-info__title_color_tertiary">({{ baseColor }})</span>
    </h3>
    <h4 class="product-info__price" :class="[`product-info__price_${cardType}`]">
      {{ price }}
    </h4>
    <ul
      v-if="cardType !== CARD_TYPES.LATEST"
      class="product-info__color-palette"
      :class="[`product-info__color-palette_${cardType}`]"
    >
      <ColorPaletteItem
        v-for="color in availableColors"
        :key="color"
        :backgroundColor="color"
        class="product-info__color-item"
      />
    </ul>
    <ul class="product-info__sizes-list">
      <SizeItem
        v-for="size in availableSizes"
        :key="size"
        :size-title="size"
        class="product-info__size-item"
      />
    </ul>
  </div>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;

  .product-info {
    display: flex;
    flex-direction: column;

    &_featured {
      gap: 14px;
    }

    &_latest {
      gap: 10px;
    }

    &__title {
      color: var(--title-color, #{colors.$secondaryFontColor});
      margin: 0 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color 0.3s ease;
      white-space: nowrap;
      width: calc(100% - 16px); // take into account horizontal margins

      &_featured {
        font-size: 1.25em;
        font-weight: 400;
        letter-spacing: 0.2px;
        line-height: 1.5em;
      }

      &_latest {
        font-size: 1em;
        font-weight: 700;
        letter-spacing: 0.1px;
        line-height: 1.5em;
      }

      &_long {
        font-size: 1em;
        letter-spacing: 0.1px;
        line-height: 1.5em;
        margin-bottom: 11px;
        margin-top: 19px;
      }

      &_color_tertiary {
        color: colors.$tertiaryFontColor;
      }
    }

    &__price {
      color: var(--price-color, #{colors.$secondaryFontColor});
      font-weight: 500;
      letter-spacing: 0.2px;
      margin: 0;
      margin-left: 8px;
      transition: all 0.3s ease;

      &_featured {
        font-size: 1.5em;
        line-height: 1.6em;
      }

      &_latest {
        font-size: 1em;
        line-height: 1.75em;
      }

      &_long {
        font-size: 1em;
        line-height: 1.75em;
        margin-bottom: 26px;
      }
    }

    &__color-palette {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-start;
      max-width: 100%;
      padding: 0 8px;

      &_long {
        margin-bottom: 17px;
      }
    }

    &__color-item {
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(3px);
      }
    }

    &__sizes-list {
      display: flex;
      gap: 11px;
      margin: 0 0 8px 8px;
      padding: 0;
    }

    &__size-item {
      transition: transform 0.3s ease;

      &:hover {
        transform: translateX(3px);
      }
    }
  }
</style>
