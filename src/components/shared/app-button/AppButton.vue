<script setup lang="ts">
  import { ROUTE_NAMES } from '../../../router/router.constants'
  import { RouterLink } from 'vue-router'

  defineProps<{
    buttonTitle: string
    route: (typeof ROUTE_NAMES)[keyof typeof ROUTE_NAMES]
    isTransparent?: boolean
  }>()
</script>

<template>
  <RouterLink :to="{ name: route }" :style="{ textDecoration: 'none', outline: 'none' }">
    <button class="app-button" :class="{ 'app-button_transparent': isTransparent }">
      {{ buttonTitle }}
    </button>
  </RouterLink>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;

  .app-button {
    border: none;
    color: colors.$accentElementColor;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.1px;
    line-height: 1.5em;
    padding: 16px 46px;
    transition:
      background-color 0.3s ease,
      transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s ease;

    &:hover,
    &:focus,
    &:focus-visible {
      background-color: colors.$hoverBgColor;
      outline: none;
      transform: scale(1.05);
    }

    &:active {
      background-color: colors.$hoverBgColor;
      transform: scale(0.95);
    }

    &:focus,
    &:focus-visible {
      box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
    }

    &_transparent {
      background: rgba(colors.$darkBgColor, 0.1);
      border: 1px solid colors.$primaryFontColor;
      color: colors.$primaryFontColor;

      &:hover,
      &:focus,
      &:focus-visible {
        border: 1px solid colors.$hoverBgColor;
        color: colors.$accentElementColor;
      }
    }
  }
</style>
