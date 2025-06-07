<script setup lang="ts">
  import AppProductCard from '../components/shared/app-product-card/AppProductCard.vue'
  import { useFavoriteStore } from '@/stores'
  import { CARD_TYPES } from '@/components/shared/app-product-card/AppProductCard.types'
  import SectionWrapper from '@/components/shared/section-wrapper/SectionWrapper.vue'
  import PageLink from '@/components/shared/page-link/PageLink.vue'
  import { ROUTE_NAMES } from '@/router/router.constants'

  const favoriteStore = useFavoriteStore()
</script>

<template>
  <SectionWrapper title="Favorite Products" class="favorite-page" isMarginNarrow>
    <TransitionGroup name="list" tag="ul" class="favorite-page__list">
      <AppProductCard
        v-for="product in favoriteStore.favoriteProducts"
        :key="product.id"
        v-bind="product"
        :cardType="CARD_TYPES.FEATURED"
      />
    </TransitionGroup>
    <div v-if="!favoriteStore.favoriteProducts.length" class="favorite-page__notification">
      <h4>No favorite products yet</h4>
      <PageLink buttonTitle="Shop Now" :route="ROUTE_NAMES.SHOP" />
    </div>
  </SectionWrapper>
</template>

<style scoped lang="scss">
  @use '@styles/spacing.scss' as spacing;
  @use '@styles/colors.scss' as colors;

  .favorite-page {
    padding-top: 0;

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin: 0;
      padding: 0;

      @include spacing.wall {
        justify-content: center;
      }
    }

    &__notification {
      color: colors.$tertiaryFontColor;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 2em;
      text-align: center;
    }
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: all 0.5s ease;
  }

  .list-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }

  .list-leave-active {
    position: absolute;
    width: calc(100% / 4 - 40px); // width of one ProductCard
  }
</style>
