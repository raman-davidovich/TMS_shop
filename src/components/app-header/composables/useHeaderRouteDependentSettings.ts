import { computed, type Ref, type ComputedRef } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { APP_NAVIGATION_COLOR_TYPES } from '../../shared/app-navigation/AppNavigation.types'
import { ROUTE_NAMES } from '../../../router/router.constants'

interface HeaderRouteDependentSettingsReturn {
  isHeaderTransparent: ComputedRef<boolean>
  headerNavigationColorType: ComputedRef<APP_NAVIGATION_COLOR_TYPES>
}

export const useHeaderRouteDependentSettings = (isMenuOpen?: Ref<boolean>): HeaderRouteDependentSettingsReturn => {
  const route: RouteLocationNormalizedLoaded = useRoute()

  const isHomeRoute = computed<boolean>(() => route.name === ROUTE_NAMES.HOME)

  const isHeaderTransparent = computed<boolean>(() => isHomeRoute.value)

  const headerNavigationColorType = computed<APP_NAVIGATION_COLOR_TYPES>(() => {
    if (isMenuOpen?.value) return APP_NAVIGATION_COLOR_TYPES.PRIMARY
    return isHomeRoute.value ? APP_NAVIGATION_COLOR_TYPES.PRIMARY : APP_NAVIGATION_COLOR_TYPES.TERTIARY
  })

  return { isHeaderTransparent, headerNavigationColorType }
}
