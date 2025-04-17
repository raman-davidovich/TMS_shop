import { ref, watch, type Ref } from 'vue'
import { HEADER_CLASSES } from '../AppHeader.constants'

export const useMenuManagement = () => {
  const isMenuOpen: Ref<boolean> = ref(false)

  const toggleMenu = (): boolean => (isMenuOpen.value = !isMenuOpen.value)

  const closeMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest(HEADER_CLASSES.BURGER_MENU) && !target.closest(HEADER_CLASSES.MENU)) isMenuOpen.value = false
  }

  const handleKeyDown = (event: KeyboardEvent) => {
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

  return { isMenuOpen, toggleMenu }
}
