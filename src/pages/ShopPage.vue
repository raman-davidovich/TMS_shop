<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { APP_HERO_IMAGES } from '@/components/app-hero/AppHero.constants'
  import ProductList from '@/components/product-list/ProductList.vue'
</script>

<template>
  <main>
    <AppHero title="Fashion" :imageURL="APP_HERO_IMAGES.SHOP" />
    <ProductList />
  </main>
</template>
