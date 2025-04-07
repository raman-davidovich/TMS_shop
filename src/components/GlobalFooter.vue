<script setup lang="ts">
  import SharedMenu from './shared/SharedMenu.vue'
</script>

<template>
  <div class="global-footer">
    <SharedMenu colorType="tertiary" />
  </div>
</template>

<style scooped lang="scss">
  @use '../styles/colors.scss' as colors;

  .global-footer {
    background-color: colors.$secondaryFontColor;
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }

  @media (width <= 700px) {
    .global-footer {
      padding: 46px 0;
    }
  }
</style>
