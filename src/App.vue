<script setup lang="ts">
  import AppHeader from './components/app-header/AppHeader.vue'
  import AppFooter from './components/app-footer/AppFooter.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.fullPath" />
    </Transition>
  </RouterView>
  <AppFooter />
</template>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
