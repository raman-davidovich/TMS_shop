import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { ROUTE_NAMES } from './router.constants'
import AccountPage from '../pages/AccountPage.vue'
import CartPage from '../pages/CartPage.vue'
import FavoritePage from '../pages/FavoritePage.vue'
import HomePage from '../pages/HomePage.vue'
import ShopPage from '../pages/ShopPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: HomePage,
    meta: { title: 'Home' }
  },
  {
    path: '/shop',
    name: ROUTE_NAMES.SHOP,
    component: ShopPage,
    meta: { title: 'Shop' }
  },
  {
    path: '/account',
    name: ROUTE_NAMES.ACCOUNT,
    component: AccountPage,
    meta: { title: 'Account' }
  },
  {
    path: '/favorite',
    name: ROUTE_NAMES.FAVORITE,
    component: FavoritePage,
    meta: { title: 'Favorites' }
  },
  {
    path: '/cart',
    name: ROUTE_NAMES.CART,
    component: CartPage,
    meta: { title: 'Cart' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300))
  }
})

router.afterEach((to: RouteLocationNormalized): void => {
  const defaultTitle = 'TMS shop'
  const pageTitle = to.meta.title ? `${defaultTitle} | ${to.meta.title}` : defaultTitle
  document.title = pageTitle
})

export default router
