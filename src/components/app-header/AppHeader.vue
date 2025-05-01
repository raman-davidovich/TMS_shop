<script setup lang="ts">
  import { computed, ref } from 'vue'
  import AppNavigation from '../shared/app-navigation/AppNavigation.vue'
  import HeaderLink from './components/header-link/HeaderLink.vue'
  import FavoriteIcon from './components/FavoriteIcon.vue'
  import CartIcon from './components/CartIcon.vue'
  import AccountIcon from './components/AccountIcon.vue'
  import BurgerMenuIcon from './components/BurgerMenuIcon.vue'
  import { useMobileDetection } from './composables/useMobileDetection'
  import { useMenuManagement } from './composables/useMenuManagement'
  import { useHeaderRouteDependentSettings } from './composables/useRouteDependentSettings'
  import { ROUTE_NAMES } from '@/router/router.constants'
  import { HEADER_CLASSES } from './AppHeader.constants'

  const { isMobile } = useMobileDetection()
  const { isMenuOpen, toggleMenu } = useMenuManagement()
  const { isTransparent, headerNavigationColorType } = useHeaderRouteDependentSettings(ref(isMenuOpen))

  const menuClasses = computed<Record<string, boolean>>(() => ({
    [HEADER_CLASSES.MENU]: true,
    [`${HEADER_CLASSES.MENU}_active`]: isMenuOpen.value
  }))
</script>

<template>
  <header class="app-header" :style="isTransparent ? { background: 'transparent' } : {}">
    <button :class="HEADER_CLASSES.BURGER_MENU" @click.stop="toggleMenu" v-show="isMobile">
      <HeaderLink class="app-header__link" :class="[`app-header__link_${headerNavigationColorType}`]">
        <BurgerMenuIcon />
      </HeaderLink>
    </button>
    <div :class="menuClasses" v-show="!isMobile || isMenuOpen">
      <AppNavigation :colorType="headerNavigationColorType" />
      <nav class="app-header__header-actions">
        <HeaderLink
          :routeName="ROUTE_NAMES.ACCOUNT"
          class="app-header__link"
          :class="[`app-header__link_${headerNavigationColorType}`]"
        >
          <AccountIcon />
        </HeaderLink>
        <HeaderLink
          :routeName="ROUTE_NAMES.FAVORITE"
          class="app-header__link"
          :class="[`app-header__link_${headerNavigationColorType}`]"
        >
          <FavoriteIcon />
        </HeaderLink>
      </nav>
    </div>
    <HeaderLink
      :routeName="ROUTE_NAMES.CART"
      class="app-header__link"
      :class="[`app-header__link_${headerNavigationColorType}`]"
    >
      <CartIcon />
    </HeaderLink>
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
    transition: background 0.3s ease;

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
        background: colors.$secondaryFontColor;
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

    &__link {
      &_primary {
        color: colors.$primaryFontColor;
      }

      &_tertiary {
        color: colors.$tertiaryFontColor;
      }
    }
  }
</style>
