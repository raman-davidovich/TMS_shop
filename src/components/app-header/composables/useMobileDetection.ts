import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'
import { SCREEN_BREAKPOINTS } from '../AppHeader.constants'

interface MobileDetectionReturn {
  isMobile: Ref<boolean>
}

export const useMobileDetection = (): MobileDetectionReturn => {
  const isMobile: Ref<boolean> = ref(false)

  const checkScreenSize = (): void => {
    isMobile.value = window.innerWidth < SCREEN_BREAKPOINTS.LG
  }

  onMounted((): void => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount((): void => window.removeEventListener('resize', checkScreenSize))

  return { isMobile }
}
