<script setup lang="ts">
  import { FEATURED_PRODUCTS_TABS } from '../featured-products-tabs/FeaturedProductsTabs.constants'

  defineProps<{
    title: FEATURED_PRODUCTS_TABS
    isActive?: boolean
  }>()

  defineEmits(['click'])
</script>

<template>
  <li :class="['featured-products-tab', { 'featured-products-tab_active': isActive }]">
    <button class="featured-products-tab__button" @click="$emit('click')">
      {{ title }}
    </button>
  </li>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .featured-products-tab {
    $root: &;

    list-style: none;
    transition: transform 0.3s ease;

    &:hover:not(#{$root}_active) {
      transform: translateY(-5px);
    }

    &__button {
      background: none;
      border: none;
      color: colors.$tertiaryFontColor;
      cursor: pointer;
      font-size: 0.9em;
      font-weight: 600;
      letter-spacing: 0.2px;
      line-height: 2em;
      padding: 0 18px;
      position: relative;
      transition: all 0.3s ease;

      @include spacing.phone {
        margin: 18px 0;
      }

      &:hover,
      &:focus-within {
        color: colors.$accentElementColor;
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px rgba(colors.$accentElementColor, 0.8);
        outline: none;
      }
    }

    &_active {
      #{$root}__button {
        color: colors.$accentElementColor;
        cursor: default;

        &::after {
          background: colors.$accentElementColor;
          bottom: -10px;
          content: '';
          height: 2px;
          left: 50%;
          position: absolute;
          transform: translateX(-50%);
          width: 40%;
        }
      }
    }
  }
</style>
