import { APP_NAVIGATION_COLOR_TYPES } from './AppNavigation.constants'

export type AppNavigationColorType = (typeof APP_NAVIGATION_COLOR_TYPES)[keyof typeof APP_NAVIGATION_COLOR_TYPES]
