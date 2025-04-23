<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  defineProps<{
    routeName?: string
  }>()
</script>

<template>
  <RouterLink :to="{ name: routeName }" class="header-link">
    <slot />
  </RouterLink>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;

  .header-link {
    align-items: center;
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

    :deep(svg) {
      height: 32px;
      width: 32px;
    }
  }
</style>
