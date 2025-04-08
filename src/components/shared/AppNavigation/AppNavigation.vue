<script setup lang="ts">
  import { ref } from 'vue'
  import { APP_NAVIGATION_COLOR_TYPE, APP_NAVIGATION_ITEM } from './AppNavigation.types'

  defineProps<{
    colorType: APP_NAVIGATION_COLOR_TYPE
  }>()

  const menuItems: APP_NAVIGATION_ITEM[] = [
    APP_NAVIGATION_ITEM.HOME,
    APP_NAVIGATION_ITEM.SHOP,
    APP_NAVIGATION_ITEM.ACCOUNT,
    APP_NAVIGATION_ITEM.PAGES,
    APP_NAVIGATION_ITEM.BLOG,
    APP_NAVIGATION_ITEM.DOCS
  ]

  const hoverIndex = ref<number | null>(null)
</script>

<template>
  <nav>
    <ul class="menu">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-item"
        :class="[`menu-item--${colorType}`]"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        <span class="link-content">
          {{ item }}
          <span class="underline" :class="{ 'underline-active': hoverIndex === index }" />
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @use '../../styles/colors.scss' as colors;

  .menu {
    display: flex;
    gap: 21px;

    &-item {
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0.2px;
      line-height: 1.25em;
      list-style-type: none;
      padding: 10px;
      position: relative;
      transition: color 0.3s ease;

      &--primary {
        color: colors.$primaryFontColor;
      }

      &--secondary {
        color: colors.$secondaryFontColor;
      }

      &--tertiary {
        color: colors.$tertiaryFontColor;
      }

      &--active {
        color: colors.$accentElementColor;
      }

      .link-content {
        display: block;
        position: relative;
      }

      .underline {
        background: colors.$accentElementColor;
        bottom: -5px;
        height: 2px;
        left: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;

        &-active {
          transform: scaleX(1);
        }
      }

      &:hover {
        color: colors.$accentElementColor;
      }
    }
  }

  @media (width <= 700px) {
    .menu {
      align-items: center;
      flex-direction: column;
      gap: 16px;

      &-item {
        padding: 0;

        &:hover {
          background: rgba(colors.$accentElementColor, 0.1);
          border-radius: 8px;
        }
      }
    }
  }
</style>
