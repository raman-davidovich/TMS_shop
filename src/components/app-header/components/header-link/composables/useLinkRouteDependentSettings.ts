import { computed, type ComputedRef } from 'vue'
import { useRoute, RouteLocationNormalized } from 'vue-router'
import { ROUTE_NAMES } from '../../../../../router/router.constants'

interface LinkRouteDependentSettingsReturn {
  isHomeRoute: ComputedRef<boolean>
}

export const useLinkRouteDependentSettings = (): LinkRouteDependentSettingsReturn => {
  const route: RouteLocationNormalized = useRoute()
  const isHomeRoute = computed<boolean>(() => route.name === ROUTE_NAMES.HOME)

  return { isHomeRoute }
}
