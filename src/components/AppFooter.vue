<script setup lang="ts">
  import AppNavigation from './shared/AppNavigation/AppNavigation.vue'
  import { APP_NAVIGATION_COLOR_TYPE } from './shared/AppNavigation/AppNavigation.types'
</script>

<template>
  <footer class="app-footer">
    <AppNavigation :colorType="APP_NAVIGATION_COLOR_TYPE.ADDITIONAL" />
  </footer>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .app-footer {
    background-color: colors.$secondaryFontColor;
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }

  @include spacing.tablet {
    .app-footer {
      padding: 46px 0;
    }
  }
</style>
