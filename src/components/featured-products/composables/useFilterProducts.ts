import { computed, type Ref } from 'vue'
import type { ProductType } from '../../shared/app-product-card/AppProductCard.types'
import { FEATURED_PRODUCTS_TABS } from '../components/featured-products-tabs/FeaturedProductsTabs.constants'

export const useFilterProducts = (
  activeTab: Ref<FEATURED_PRODUCTS_TABS>,
  getDbProducts: () => ProductType[]
) => {
  return computed(() => {
    const products = [...getDbProducts()]

    switch (activeTab.value) {
      case FEATURED_PRODUCTS_TABS.FEATURED:
        return products.sort((a, b) => b.price.value - a.price.value)
      case FEATURED_PRODUCTS_TABS.NEW:
        return products.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
      case FEATURED_PRODUCTS_TABS.POPULAR:
        return products.sort((a, b) => b.numberOfSales - a.numberOfSales)
      default:
        return products
    }
  })
}
