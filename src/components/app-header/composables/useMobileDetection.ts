import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'
import { SCREEN_BREAKPOINTS } from '../AppHeader.constants'

export const useMobileDetection = () => {
  const isMobile: Ref<boolean> = ref(false)

  const checkScreenSize = (): boolean => (isMobile.value = window.innerWidth < SCREEN_BREAKPOINTS.LG)

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount(() => window.removeEventListener('resize', checkScreenSize))

  return { isMobile }
}
