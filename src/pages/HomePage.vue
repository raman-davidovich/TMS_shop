<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { APP_HERO_IMAGES } from '@/components/app-hero/AppHero.constants'
</script>

<template>
  <AppHero title="New Collection" :imageURL="APP_HERO_IMAGES.HOME" withButton />
</template>
