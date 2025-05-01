import { computed, type Ref, type ComputedRef } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { APP_NAVIGATION_COLOR_TYPES } from '../../shared/app-navigation/AppNavigation.types'
import { ROUTE_NAMES } from '../../../router/router.constants'

interface HeaderRouteDependentSettings {
  isTransparent: ComputedRef<boolean>
  headerNavigationColorType: ComputedRef<APP_NAVIGATION_COLOR_TYPES>
}

export const useHeaderRouteDependentSettings = (isMenuOpen?: Ref<boolean>): HeaderRouteDependentSettings => {
  const route: RouteLocationNormalizedLoaded = useRoute()

  const isHomeRoute = computed<boolean>(() => route.name === ROUTE_NAMES.HOME)

  const isTransparent = computed<boolean>(() => isHomeRoute.value)

  const headerNavigationColorType = computed<APP_NAVIGATION_COLOR_TYPES>(() => {
    if (isMenuOpen?.value) return APP_NAVIGATION_COLOR_TYPES.PRIMARY
    return isHomeRoute.value ? APP_NAVIGATION_COLOR_TYPES.PRIMARY : APP_NAVIGATION_COLOR_TYPES.TERTIARY
  })

  return { isTransparent, headerNavigationColorType }
}
