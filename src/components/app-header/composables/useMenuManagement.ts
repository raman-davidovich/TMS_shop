import { ref, watch, type Ref } from 'vue'
import { HEADER_CLASSES } from '../AppHeader.constants'

interface MenuManagementReturn {
  isMenuOpen: Ref<boolean>
  toggleMenu: () => boolean
  closeMobileMenu: () => void
}

export const useMenuManagement = (): MenuManagementReturn => {
  const isMenuOpen: Ref<boolean> = ref(false)

  const toggleMenu = (): boolean => (isMenuOpen.value = !isMenuOpen.value)

  const closeMenu = (event: MouseEvent): void => {
    const target = event.target as HTMLElement
    if (
      !target.closest(`.${HEADER_CLASSES.BURGER_MENU}`) &&
      !target.closest(`.${HEADER_CLASSES.MENU}`)
    )
      isMenuOpen.value = false
  }

  const closeMobileMenu = (): void => {
    setTimeout(() => {
      isMenuOpen.value = false
    }, 1000)
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') isMenuOpen.value = false
  }

  watch(isMenuOpen, (status: boolean): void => {
    if (status) {
      document.addEventListener('click', closeMenu)
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('click', closeMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return { isMenuOpen, toggleMenu, closeMobileMenu }
}
