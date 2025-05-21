<script setup lang="ts">
  import { TABS } from '../featured-products-tabs/FeaturedProductsTabs.constants'

  defineProps<{
    title: TABS
    active?: boolean
  }>()

  defineEmits(['click'])
</script>

<template>
  <li :class="{ active }">
    <button
      class="featured-products-tab"
      :class="{ 'featured-products-tab_active': active }"
      @click="$emit('click')"
    >
      {{ title }}
    </button>
  </li>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .featured-products-tab {
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

    &_active {
      color: colors.$accentElementColor;

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

    &:hover,
    &:focus-within {
      color: colors.$accentElementColor;
    }

    &:focus-visible {
      outline: none;
    }
  }
</style>
