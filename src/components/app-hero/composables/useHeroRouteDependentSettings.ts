import { computed, onMounted, onUnmounted, ref, type ComputedRef } from 'vue'
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router'
import { ROUTE_NAMES } from '../../../router/router.constants'

interface HeroRouteDependentSettings {
  heroPadding: ComputedRef<string>
  heroMarginTop: ComputedRef<string>
}

export const useHeroRouteDependentSettings = (): HeroRouteDependentSettings => {
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

  const heroPadding = computed<string>(() => {
    if (isShopRoute.value) {
      return isTablet.value ? '75px 0' : '183px 0 75px'
    }
    return '262px 0 134px'
  })

  const headerHeight = computed<number>(() => {
    return parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-height')
    )
  })

  const heroMarginTop = computed<string>(() =>
    isShopRoute.value ? '0' : `-${headerHeight.value}px`
  )

  return { heroPadding, heroMarginTop }
}
