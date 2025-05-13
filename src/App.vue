<script setup lang="ts">
  import { onMounted } from 'vue'
  import AppHeader from './components/app-header/AppHeader.vue'
  import AppFooter from './components/app-footer/AppFooter.vue'
  import { RouterView } from 'vue-router'
  import { useProductStore } from '@/stores/productStore'
  import { useFavoriteStore } from '@/stores/favoriteStore/favoriteStore'

  const productStore = useProductStore()
  const favoriteStore = useFavoriteStore()

  favoriteStore.initFromStorage()

  onMounted(() => {
    productStore.fetchProducts()
  })
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
