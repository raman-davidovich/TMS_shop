<script setup lang="ts">
  import AppHero from '@/components/app-hero/AppHero.vue'
  import { APP_HERO_IMAGES } from '@/components/app-hero/AppHero.constants'
  import ProductList from '@/components/product-list/ProductList.vue'
  import SortingBar from '@/components/sorting-bar/SortingBar.vue'
  import { ref, type Ref } from 'vue'
  import type { SortOption } from '@/stores/productStore.types'
  import type { ViewType } from '@/components/product-list/ProductList.types'

  const selectedSort: Ref<SortOption> = ref('popularity')
  const viewType: Ref<ViewType> = ref('grid')
</script>

<template>
  <main class="shop-page">
    <AppHero title="Fashion" :imageURL="APP_HERO_IMAGES.SHOP" />
    <div class="shop-page__main-block">
      <SortingBar v-model:sortBy="selectedSort" v-model:viewType="viewType" />
      <ProductList :sortBy="selectedSort" :viewType="viewType" />
    </div>
  </main>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .shop-page {
    &__main-block {
      background-color: colors.$additionalBgColor;
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 30px 26px;
    }
  }
</style>
