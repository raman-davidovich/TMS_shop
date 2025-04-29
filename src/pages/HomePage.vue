<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { IMAGES } from '@/components/app-hero/AppHero.constants'
</script>

<template>
  <AppHero title="New Collection" :imageURL="IMAGES.HOME" withButton />
</template>
