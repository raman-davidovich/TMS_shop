import { computed } from 'vue'
import type { FirebaseProductType } from '../../shared/app-product-card/AppProductCard.types'
import { FEATURED_PRODUCTS_TABS } from '../components/featured-products-tabs/FeaturedProductsTabs.constants'

export const useFilterProducts = (
  activeTab: FEATURED_PRODUCTS_TABS,
  dbProducts: FirebaseProductType[]
) => {
  return computed(() => {
    const products = [...dbProducts].filter((product) => product.isFeatured)

    switch (activeTab) {
      case FEATURED_PRODUCTS_TABS.FEATURED:
        return products.filter((product) => product.isFeatured)
      case FEATURED_PRODUCTS_TABS.NEW:
        return products.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
      case FEATURED_PRODUCTS_TABS.POPULAR:
        return products.sort((a, b) => b.numberOfSales - a.numberOfSales)
      default:
        return products
    }
  })
}
