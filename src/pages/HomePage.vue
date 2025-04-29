<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { IMAGES } from '@/components/app-hero/AppHero.constants'
  import SectionWrapper from '@/components/shared/section-wrapper/SectionWrapper.vue'
</script>

<template>
  <main>
    <AppHero title="New Collection" :imageURL="IMAGES.HOME" withButton />
    <SectionWrapper />
    <SectionWrapper title="Featured Products" isMarginNarrow />
    <SectionWrapper title="Latest Products" />
  </main>
</template>
