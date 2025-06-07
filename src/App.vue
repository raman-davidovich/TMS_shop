<script setup lang="ts">
  import AppHeader from './components/app-header/AppHeader.vue'
  import AppFooter from './components/app-footer/AppFooter.vue'
  import { RouterView } from 'vue-router'
  import { useProductStore, useFavoriteStore } from '@/stores'
  import { initializeFirebase } from './firebase/config'

  const productStore = useProductStore()
  const favoriteStore = useFavoriteStore()

  ;(async () => {
    await initializeFirebase()
    favoriteStore.initFromStorage()
    await productStore.fetchProducts()
  })()
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
