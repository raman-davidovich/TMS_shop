<script setup lang="ts">
  import {
    FeaturedProductType,
    CARD_TYPES
  } from '../../shared/app-product-card/AppProductCard.types'
  import SizeItem from './components/size-item/SizeItem.vue'
  import ColorPaletteItem from './components/color-palette-item/ColorPaletteItem.vue'
  import LikeIcon from './components/LikeIcon.vue'
  import { useProductCard } from './composables/useProductCard'

  const { image, name, baseColor, price, availableColors, availableSizes, cardType } = defineProps<
    FeaturedProductType & { cardType?: CARD_TYPES }
  >()

  const { isLiked, shouldAnimate, toggleLike, formattedPrice } = useProductCard(price)
</script>

<template>
  <li class="app-product-card" :class="[`app-product-card_${cardType}`]">
    <img :src="image" :alt="name" class="app-product-card__image" />
    <button class="app-product-card__like-button" @click="toggleLike" aria-label="Add to favorites">
      <LikeIcon
        class="app-product-card__like-icon"
        :class="{
          'app-product-card__like-icon_active': isLiked,
          'app-product-card__like-icon_animate': shouldAnimate
        }"
      />
    </button>
    <h3 class="app-product-card__title">
      {{ name }}
      <br />
      <span class="app-product-card__title_color_tertiary">{{ baseColor }}</span>
    </h3>
    <h4 class="app-product-card__price">
      {{ formattedPrice }}
    </h4>
    <ul v-if="cardType === CARD_TYPES.FEATURED" class="app-product-card__color-palette">
      <ColorPaletteItem
        v-for="color in availableColors"
        :key="color"
        :backgroundColor="color"
        class="app-product-card__color-item"
      />
    </ul>
    <ul class="app-product-card__sizes-list">
      <SizeItem
        v-for="size in availableSizes"
        :key="size"
        :size-title="size"
        class="app-product-card__size-item"
      />
    </ul>
  </li>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .app-product-card {
    $self: &;

    cursor: pointer;
    display: flex;
    flex-direction: column;
    list-style: none;
    position: relative;
    transition: all 0.3s ease-in-out;

    &_featured {
      border-radius: 0 0 10px 10px;
      gap: 14px;

      #{$self}__image {
        border-radius: 10px;
        height: 414px;
        width: 242px;
      }

      #{$self}__title {
        font-size: 1.25em;
        font-weight: 400;
        letter-spacing: 0.2px;
        line-height: 1.5em;
      }

      #{$self}__price {
        font-size: 1.5em;
        line-height: 1.6em;
      }
    }

    &_latest {
      gap: 10px;

      #{$self}__image {
        height: 180px;
        object-fit: cover;
        object-position: center;
        width: 240px;

        @include spacing.phone {
          width: 320px;
        }
      }

      #{$self}__title {
        font-size: 1em;
        font-weight: 700;
        letter-spacing: 0.1px;
        line-height: 1.5em;
      }

      #{$self}__price {
        font-size: 1em;
        line-height: 1.75em;
      }

      @include spacing.phone {
        #{$self}__sizes-list {
          display: none;
        }
      }
    }

    &:hover {
      box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
      transform: translateY(-5px);

      #{$self}__title {
        color: colors.$accentElementColor;
      }

      #{$self}__price {
        color: colors.$accentElementColor;
      }

      #{$self}__image {
        transform: scale(1.03);
      }
    }

    &__image {
      background-size: contain;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    }

    &__like-button {
      align-items: center;
      background-color: rgba(colors.$hoverBgColor, 0.5);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      height: 38px;
      justify-content: center;
      padding: 0;
      position: absolute;
      right: 9px;
      top: 9px;
      transition: all 0.3s ease;
      width: 38px;
      z-index: 3;

      &:hover {
        transform: scale(1.1);
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
        outline: none;
      }
    }

    &__like-icon {
      color: colors.$primaryFontColor;
      height: 20px;
      transition: fill 0.3s ease;
      width: 20px;

      &_active,
      &:hover {
        color: colors.$accentElementColor;
      }

      &_animate {
        animation: heart-beat 0.4s ease;
      }
    }

    &__title {
      color: colors.$secondaryFontColor;
      margin: 0 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: color 0.3s ease;
      white-space: nowrap;
      width: calc(100% - 16px); // take into account horizontal margin

      &_color_tertiary {
        color: colors.$tertiaryFontColor;
      }
    }

    &__price {
      color: colors.$secondaryFontColor;
      font-weight: 500;
      letter-spacing: 0.2px;
      margin: 0 0 0 8px;
      transition: all 0.3s ease;
    }

    &__color-palette {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-start;
      max-width: 100%;
      padding: 0 8px;
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

  @keyframes heart-beat {
    0% {
      transform: scale(1);
    }

    30% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(0.9);
    }

    70% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
