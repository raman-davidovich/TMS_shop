import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { ROUTE_NAMES } from './router.constants'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: () => import('../pages/HomePage.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/shop',
    name: ROUTE_NAMES.SHOP,
    component: () => import('../pages/ShopPage.vue'),
    meta: { title: 'Shop' }
  },
  {
    path: '/account',
    name: ROUTE_NAMES.ACCOUNT,
    component: () => import('../pages/AccountPage.vue'),
    meta: { title: 'Account' }
  },
  {
    path: '/favorite',
    name: ROUTE_NAMES.FAVORITE,
    component: () => import('../pages/FavoritePage.vue'),
    meta: { title: 'Favorites' }
  },
  {
    path: '/cart',
    name: ROUTE_NAMES.CART,
    component: () => import('../pages/CartPage.vue'),
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
