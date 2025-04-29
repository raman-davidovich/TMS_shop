import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { ROUTE_NAMES } from '../../../router/router.constants'

export const useRouteDependentSettings = () => {
  const route: RouteLocationNormalizedLoaded = useRoute()
  const isTablet = ref<boolean>(false)

  const updateMediaQuery = (): void => {
    isTablet.value = window.matchMedia('(max-width: 1024px)').matches
  }

  onMounted(() => {
    updateMediaQuery()
    window.addEventListener('resize', updateMediaQuery)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateMediaQuery)
  })

  const padding = computed<string>(() => {
    if (route.name === ROUTE_NAMES.SHOP) {
      return isTablet.value ? '75px 0' : '183px 0 75px'
    }
    return '262px 0 134px'
  })

  const marginTop = computed<string>(() => (route.name === ROUTE_NAMES.SHOP ? '0' : '-108px'))

  return { padding, marginTop }
}
