<script setup lang="ts">
  import { ProductType, CARD_TYPES } from './AppProductCard.types'
  import LikeIcon from './components/LikeIcon.vue'
  import { useProductCard } from './composables/useProductCard'
  import { useFavoriteStore } from '@/stores'
  import ProductInfo from './components/product-info/ProductInfo.vue'

  const { id, image, name, baseColor, price, availableColors, availableSizes, cardType } =
    defineProps<ProductType & { cardType?: CARD_TYPES }>()

  const { shouldAnimate, toggleLike, formattedPrice } = useProductCard(price)

  const favoriteStore = useFavoriteStore()

  const handleLikeClick = () => {
    favoriteStore.toggleFavorite(id)
    toggleLike()
  }
</script>

<template>
  <li class="app-product-card" :class="[`app-product-card_${cardType}`]">
    <img :src="image" :alt="name" class="app-product-card__image" />
    <button
      class="app-product-card__like-button"
      @click="handleLikeClick"
      aria-label="Add to favorites"
    >
      <LikeIcon
        class="app-product-card__like-icon"
        :class="{
          'app-product-card__like-icon_active': favoriteStore.isFavorite(id),
          'app-product-card__like-icon_animate': shouldAnimate
        }"
      />
    </button>
    <ProductInfo
      :name="name"
      :baseColor="baseColor"
      :availableColors="availableColors"
      :availableSizes="availableSizes"
      :cardType="cardType"
      :price="formattedPrice"
    />
  </li>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .app-product-card {
    $self: &;

    --title-color: #{colors.$secondaryFontColor};
    --price-color: #{colors.$secondaryFontColor};

    cursor: pointer;
    display: flex;
    flex-direction: column;
    list-style: none;
    position: relative;
    transition: all 0.3s ease-in-out;

    &_featured {
      border-radius: 0 0 10px 10px;
      gap: 14px;
      width: 242px;

      #{$self}__image {
        border-radius: 10px;
        height: 414px;
        width: 242px;
      }
    }

    &_latest {
      gap: 10px;
      width: 240px;

      @include spacing.phone {
        width: 320px;

        #{$self}__sizes-list {
          display: none;
        }
      }

      #{$self}__image {
        background-size: contain;
        height: 180px;
        object-fit: cover;
        object-position: center;
        width: 240px;

        @include spacing.phone {
          width: 320px;
        }
      }
    }

    &_long {
      background-color: colors.$primaryFontColor;
      border: 1px solid colors.$tertiaryBorderColor;
      box-shadow: 0 2px 4px 0 #0000001a;
      flex-direction: row;
      gap: 37px;
      padding: 20px 0 25px 22.5px;
      width: 100%;

      #{$self}__image {
        background-size: contain;
        height: 192px;
        object-fit: cover;
        object-position: center;
        width: 294px;
      }
    }

    &:hover {
      box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
      transform: translateY(-5px);

      --title-color: #{colors.$accentElementColor};
      --price-color: #{colors.$accentElementColor};

      #{$self}__image {
        transform: scale(1.03);
      }
    }

    &__image {
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
