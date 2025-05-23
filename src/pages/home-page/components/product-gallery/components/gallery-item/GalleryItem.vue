<script setup lang="ts">
  import PageLink from '@/components/shared/page-link/PageLink.vue'
  import { ROUTE_NAMES } from '@/router/router.constants'

  defineProps<{
    buttonTitle: string
    imageURL: string
  }>()
</script>

<template>
  <div class="gallery-item" :style="{ backgroundImage: `url(${imageURL})` }">
    <PageLink :buttonTitle="buttonTitle" :route="ROUTE_NAMES.SHOP" isTransparent />
  </div>
</template>

<style scoped lang="scss">
  .gallery-item {
    align-items: center;
    background-size: cover;
    display: flex;
    height: 220px;
    justify-content: center;
    width: 370px;
  }
</style>
