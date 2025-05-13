<script setup lang="ts">
  import type { FeaturedProductType } from '../../shared/app-product-card/AppProductCard.types'
  import SizeItem from './components/size-item/SizeItem.vue'
  import ColorPaletteItem from './components/color-palette-item/ColorPaletteItem.vue'
  import LikeIcon from './components/LikeIcon.vue'
  import { useProductCard } from './composables/useProductCard'

  const { image, name, baseColor, price, availableColors, availableSizes } =
    defineProps<FeaturedProductType>()

  const { isLiked, shouldAnimate, toggleLike, formattedPrice } = useProductCard(price)
</script>

<template>
  <li class="app-product-card">
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
    <h4 class="app-product-card__price">{{ formattedPrice }}</h4>
    <ul class="app-product-card__color-palette">
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

  .app-product-card {
    $self: &;

    border-radius: 0 0 10px 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 14px;
    list-style: none;
    position: relative;
    transition: all 0.3s ease-in-out;

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
      border-radius: 10px;
      height: 414px;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      width: 242px;
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
      fill: colors.$primaryFontColor;
      height: 20px;
      transition: fill 0.3s ease;
      width: 20px;

      &_active,
      &:hover {
        fill: colors.$accentElementColor;
      }

      &_animate {
        animation: heart-beat 0.4s ease;
      }
    }

    &__title {
      color: colors.$secondaryFontColor;
      font-size: 1.25em;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 1.5em;
      margin: 0;
      transition: color 0.3s ease;

      &_color_tertiary {
        color: colors.$tertiaryFontColor;
      }
    }

    &__price {
      color: colors.$secondaryFontColor;
      font-size: 1.5em;
      font-weight: 500;
      letter-spacing: 0.2px;
      line-height: 1.6em;
      margin: 0;
      transition: all 0.3s ease;
    }

    &__color-palette {
      display: flex;
      gap: 8px;
      padding: 0;
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
