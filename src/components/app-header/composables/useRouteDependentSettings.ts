import { computed, Ref } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { APP_NAVIGATION_COLOR_TYPES } from '../../shared/app-navigation/AppNavigation.types'
import { ROUTE_NAMES } from '../../../router/router.constants'

export const useRouteDependentSettings = (isMenuOpen?: Ref<boolean>) => {
  const route: RouteLocationNormalizedLoaded = useRoute()

  const isHomeRoute = computed<boolean>(() => route.name === ROUTE_NAMES.HOME)

  const isTransparent = computed<boolean>(() => isHomeRoute.value)

  const colorType = computed<APP_NAVIGATION_COLOR_TYPES>(() => {
    if (isMenuOpen?.value) return APP_NAVIGATION_COLOR_TYPES.PRIMARY
    return isHomeRoute.value ? APP_NAVIGATION_COLOR_TYPES.PRIMARY : APP_NAVIGATION_COLOR_TYPES.TERTIARY
  })

  return { isTransparent, colorType }
}
