<script setup lang="ts">
  import { APP_NAVIGATION_COLOR_TYPES, APP_NAVIGATION_ITEMS } from './AppNavigation.types'
  import { MENU_ITEMS } from './AppNavigation.constants'
  import { computed } from 'vue'

  defineProps<{
    colorType: APP_NAVIGATION_COLOR_TYPES
    isShort?: boolean
  }>()

  const filteredMenuItems = computed<APP_NAVIGATION_ITEMS[]>(() => MENU_ITEMS.slice(0, -1))
</script>

<template>
  <nav class="app-navigation">
    <ul class="app-navigation__list">
      <li
        v-for="item in isShort ? filteredMenuItems : MENU_ITEMS"
        :key="item"
        class="app-navigation__item"
        :class="[`app-navigation__item_${colorType}`]"
      >
        <span class="app-navigation__link">
          {{ item }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .app-navigation {
    &__list {
      display: flex;
      gap: 21px;
      margin: 0;
      padding: 0;
    }

    &__item {
      cursor: pointer;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0.2px;
      line-height: 1.25em;
      list-style-type: none;
      padding: 10px;
      position: relative;
      transition: color 0.3s ease;

      &::after {
        background-color: colors.$accentElementColor;
        bottom: 0;
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: 0;
      }

      &:hover {
        color: colors.$accentElementColor;

        &::after {
          width: 100%;
        }
      }

      &_primary {
        color: colors.$primaryFontColor;
      }

      &_additional {
        color: colors.$additionalFontColor;
      }

      &_tertiary {
        color: colors.$tertiaryFontColor;
      }
    }

    &__link {
      display: block;
      position: relative;
    }

    @include spacing.tablet {
      &__list {
        align-items: center;
        flex-direction: column;
        gap: 16px;
      }

      &__item {
        padding: 0;

        &::after {
          bottom: -5px;
        }
      }
    }
  }
</style>
