<script setup lang="ts">
  import PageLink from '../shared/page-link/PageLink.vue'
  import { ROUTE_NAMES } from '@/router/router.constants'
  import { useHeroRouteDependentSettings } from './composables/useHeroRouteDependentSettings'

  const { title, withButton, imageURL } = defineProps<{
    title: string
    withButton?: boolean
    imageURL: string
  }>()

  const { heroPadding, heroMarginTop } = useHeroRouteDependentSettings()
</script>

<template>
  <section
    class="app-hero"
    :style="{
      backgroundImage: `url(${imageURL})`,
      padding: heroPadding,
      '--margin-top': heroMarginTop
    }"
  >
    <h3 class="app-hero__subtitle">SUMMER 2020</h3>
    <h1 class="app-hero__title">{{ title }}</h1>
    <p class="app-hero__description">Find The Perfect style for you</p>
    <PageLink class="app-hero__button" v-if="withButton" buttonTitle="Shop Now" :route="ROUTE_NAMES.SHOP" />
  </section>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .app-hero {
    align-items: center;
    background-position: 0 -130px;
    background-repeat: no-repeat;
    background-size: cover;
    color: colors.$primaryFontColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: calc(-1 * var(--header-height));

    @include spacing.tv {
      background-position: 0 -100px;
    }

    @include spacing.desktop {
      background-position: 0 -80px;
    }

    @include spacing.tablet {
      margin-top: var(--margin-top);
    }

    @include spacing.folder {
      background-position: 0 0;
    }

    &__subtitle {
      font-size: 1.5em;
      font-weight: 700;
      letter-spacing: 0.1px;
      line-height: 1.5em;
      margin: 0;

      @include spacing.folder {
        font-size: 1em;
      }
    }

    &__title {
      font-size: 3.625em;
      font-weight: 800;
      letter-spacing: 0.2px;
      line-height: 1.38em;
      margin: 0;

      @include spacing.folder {
        font-size: 2.4em;
      }
    }

    &__description {
      font-size: 1.25em;
      font-weight: 500;
      letter-spacing: 0.26px;
      line-height: 1.89em;
      margin: 0;

      @include spacing.folder {
        font-size: 1em;
      }
    }

    &__button {
      margin-top: 31px;
    }
  }
</style>
