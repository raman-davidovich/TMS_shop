<script setup lang="ts">
  import GalleryItem from './components/gallery-item/GalleryItem.vue'
  import { GALLERY_ITEMS } from './ProductGallery.constants'
</script>

<template>
  <div class="product-gallery">
    <GalleryItem
      v-for="{ imageURL, buttonTitle } in GALLERY_ITEMS"
      :key="buttonTitle"
      :buttonTitle="buttonTitle"
      :imageURL="imageURL"
      class="product-gallery__item"
    />
  </div>
</template>

<style scoped lang="scss">
  @use '@styles/spacing.scss' as spacing;

  .product-gallery {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @include spacing.desktop {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @include spacing.folder {
      grid-gap: 10px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
    }

    &__item {
      &:nth-of-type(1) {
        grid-area: 1 / 1 / 2 / 2;

        @include spacing.desktop {
          grid-area: 1 / 1 / 2 / 2;
        }
      }

      &:nth-of-type(2) {
        grid-area: 2 / 1 / 3 / 2;

        @include spacing.desktop {
          grid-area: 2 / 1 / 3 / 2;
        }
      }

      &:nth-of-type(3) {
        grid-area: 1 / 2 / 3 / 3;
        height: 100%;

        @include spacing.desktop {
          grid-area: 1 / 2 / 3 / 3;
        }

        @include spacing.folder {
          grid-area: 3 / 1 / 5 / 2;
        }
      }

      &:nth-of-type(4) {
        grid-area: 1 / 3 / 2 / 4;

        @include spacing.desktop {
          grid-area: 3 / 1 / 4 / 2;
        }

        @include spacing.folder {
          grid-area: 5 / 1 / 6 / 2;
        }
      }

      &:nth-of-type(5) {
        grid-area: 2 / 3 / 3 / 4;

        @include spacing.desktop {
          grid-area: 3 / 2 / 4 / 3;
        }

        @include spacing.folder {
          grid-area: 6 / 1 / 7 / 2;
        }
      }
    }
  }
</style>
