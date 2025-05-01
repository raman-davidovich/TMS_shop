import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { ROUTE_NAMES } from '../../../router/router.constants'

export const useRouteDependentSettings = () => {
  const route: RouteLocationNormalizedLoaded = useRoute()
  const isTablet = ref<boolean>(false)
  const isShopRoute = computed<boolean>(() => route.name === ROUTE_NAMES.SHOP)

  const updateMediaQuery = (): void => {
    isTablet.value = window.matchMedia('(max-width: 1024px)').matches
  }

  onMounted((): void => {
    updateMediaQuery()
    window.addEventListener('resize', updateMediaQuery)
  })

  onUnmounted((): void => {
    window.removeEventListener('resize', updateMediaQuery)
  })

  const padding = computed<string>(() => {
    if (isShopRoute.value) {
      return isTablet.value ? '75px 0' : '183px 0 75px'
    }
    return '262px 0 134px'
  })

  const marginTop = computed<string>(() => (isShopRoute.value ? '0' : '-108px'))

  return { padding, marginTop }
}
