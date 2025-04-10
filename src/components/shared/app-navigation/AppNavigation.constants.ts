import { AppNavigationItemType } from './AppNavigation.types'

export const APP_NAVIGATION_ITEMS = {
  HOME: 'Home',
  SHOP: 'Shop',
  ACCOUNT: 'Account',
  PAGES: 'Pages',
  BLOG: 'Blog',
  DOCS: 'Docs/Components'
} as const

export const MENU_ITEMS: AppNavigationItemType[] = [
  APP_NAVIGATION_ITEMS.HOME,
  APP_NAVIGATION_ITEMS.SHOP,
  APP_NAVIGATION_ITEMS.ACCOUNT,
  APP_NAVIGATION_ITEMS.PAGES,
  APP_NAVIGATION_ITEMS.BLOG,
  APP_NAVIGATION_ITEMS.DOCS
] as const

export const APP_NAVIGATION_COLOR_TYPES = {
  PRIMARY: 'primary',
  ADDITIONAL: 'additional'
} as const
