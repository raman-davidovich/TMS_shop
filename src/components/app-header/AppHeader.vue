<script setup lang="ts">
  import AppNavigation from '../shared/app-navigation/AppNavigation.vue'
  import { APP_NAVIGATION_COLOR_TYPES } from '../shared/app-navigation/AppNavigation.types'
  import AppIcon from '../shared/app-icon/AppIcon.vue'
  import FavoriteIcon from './components/FavoriteIcon.vue'
  import CartIcon from './components/CartIcon.vue'
  import AccountIcon from './components/AccountIcon.vue'
  import BurgerMenuIcon from './components/BurgerMenuIcon.vue'
  import { useMobileDetection } from './composables/useMobileDetection'
  import { useMenuManagement } from './composables/useMenuManagement'

  const { isMobile } = useMobileDetection()
  const { isMenuOpen, toggleMenu } = useMenuManagement()
</script>

<template>
  <header class="app-header">
    <button class="app-header__burger-menu" @click.stop="toggleMenu" v-show="isMobile">
      <AppIcon>
        <BurgerMenuIcon />
      </AppIcon>
    </button>
    <div class="app-header__menu" :class="{ 'app-header__menu_active': isMenuOpen }" v-show="!isMobile || isMenuOpen">
      <AppNavigation :color-type="APP_NAVIGATION_COLOR_TYPES.TERTIARY" isShort />
      <nav class="app-header__header-actions">
        <AppIcon>
          <AccountIcon />
        </AppIcon>
        <AppIcon>
          <FavoriteIcon />
        </AppIcon>
      </nav>
    </div>
    <AppIcon>
      <CartIcon />
    </AppIcon>
  </header>
</template>

<style scoped lang="scss">
  @use '@styles/colors.scss' as colors;
  @use '@styles/spacing.scss' as spacing;

  .app-header {
    align-items: center;
    background-color: colors.$primaryFontColor;
    display: flex;
    justify-content: end;
    padding: 21px 44px 29px 0;
    position: relative;

    @include spacing.tablet {
      gap: 9px;
      padding-right: 12px;
    }

    &__burger-menu {
      background: none;
      border: none;
      cursor: pointer;
      order: 1;
      padding: 0;
      z-index: 1000;
    }

    &__menu {
      align-items: center;
      display: flex;
      gap: 376px;
      justify-content: end;
      padding-right: 16px;

      @include spacing.desktop {
        gap: 300px;
      }

      @include spacing.tablet {
        background: #fff;
        flex-direction: column;
        gap: 20px;
        height: 100vh;
        justify-content: center;
        position: fixed;
        right: -100%;
        top: 0;
        width: 70%;
        z-index: 999;

        &_active {
          right: 0;
        }
      }
    }

    &__header-actions {
      display: flex;
      gap: 16px;

      @include spacing.tablet {
        flex-direction: column;
      }
    }
  }
</style>
