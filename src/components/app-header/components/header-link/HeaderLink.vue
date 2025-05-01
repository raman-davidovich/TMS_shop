<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useLinkRouteDependentSettings } from './composables/useLinkRouteDependentSettings'

  defineProps<{
    routeName?: string
  }>()

  const { isHomeRoute } = useLinkRouteDependentSettings()
</script>

<template>
  <RouterLink :to="{ name: routeName }" class="header-link" :class="{ 'header-link_accent': !isHomeRoute }">
    <slot />
  </RouterLink>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;

  .header-link {
    align-items: center;
    border: 1px solid transparent;
    border-radius: 50%;
    color: colors.$tertiaryFontColor;
    display: flex;
    height: 56px;
    justify-content: center;
    transition:
      background-color 0.3s ease,
      transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s ease;
    width: 56px;

    &:hover,
    &:focus-visible {
      background-color: rgba(colors.$hoverBgColor, 0.4);
      outline: none;
    }

    &:active {
      background-color: rgba(colors.$hoverBgColor, 0.4);
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
    }

    &:hover {
      border: 1px solid rgba(colors.$primaryFontColor, 0.5);
    }

    :deep(svg) {
      height: 32px;
      width: 32px;
    }

    &_accent:hover {
      border: 1px solid rgba(colors.$accentElementColor, 0.5);
    }
  }
</style>
