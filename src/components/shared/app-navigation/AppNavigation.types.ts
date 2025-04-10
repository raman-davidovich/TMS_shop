import { APP_NAVIGATION_COLOR_TYPES, APP_NAVIGATION_ITEMS } from './AppNavigation.constants'

export type AppNavigationItemType = (typeof APP_NAVIGATION_ITEMS)[keyof typeof APP_NAVIGATION_ITEMS]
export type AppNavigationColorType = (typeof APP_NAVIGATION_COLOR_TYPES)[keyof typeof APP_NAVIGATION_COLOR_TYPES]
