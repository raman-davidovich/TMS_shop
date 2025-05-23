<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { APP_HERO_IMAGES } from '@/components/app-hero/AppHero.constants'
  import SectionWrapper from '@/components/shared/section-wrapper/SectionWrapper.vue'
  import ProductGallery from '@/pages/home-page/components/product-gallery/ProductGallery.vue'
  import FeaturedProducts from '@/pages/home-page/components/featured-products/FeaturedProducts.vue'
  import LatestProducts from './components/latest-products/LatestProducts.vue'
</script>

<template>
  <main>
    <AppHero title="New Collection" :imageURL="APP_HERO_IMAGES.HOME" withButton />
    <SectionWrapper><ProductGallery /></SectionWrapper>
    <SectionWrapper title="Featured Products" isMarginNarrow><FeaturedProducts /></SectionWrapper>
    <SectionWrapper title="Latest Products"><LatestProducts /></SectionWrapper>
  </main>
</template>
