import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from './router.constants'
import AccountPage from '../pages/AccountPage.vue'
import CartPage from '../pages/CartPage.vue'
import FavoritePage from '../pages/FavoritePage.vue'
import HomePage from '../pages/HomePage.vue'
import ShopPage from '../pages/ShopPage.vue'

const routes = [
  {
    path: '/',
    name: ROUTE_NAMES.HOME,
    component: HomePage
  },
  {
    path: '/shop',
    name: ROUTE_NAMES.SHOP,
    component: ShopPage
  },
  {
    path: '/account',
    name: ROUTE_NAMES.ACCOUNT,
    component: AccountPage
  },
  {
    path: '/favorite',
    name: ROUTE_NAMES.FAVORITE,
    component: FavoritePage
  },
  {
    path: '/cart',
    name: ROUTE_NAMES.CART,
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300))
  }
})

export default router
