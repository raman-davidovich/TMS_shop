<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { APP_HERO_IMAGES } from '@/components/app-hero/AppHero.constants'
</script>

<template>
  <AppHero title="Fashion" :imageURL="APP_HERO_IMAGES.SHOP" />
</template>
