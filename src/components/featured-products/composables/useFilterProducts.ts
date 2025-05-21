import { computed, type Ref } from 'vue'
import { FEATURED_PRODUCTS } from '../../shared/app-product-card/AppProductCard.constants'
import type { FeaturedProductType } from '../../shared/app-product-card/AppProductCard.types'
import { FEATURED_PRODUCTS_TABS } from '../components/featured-products-tabs/FeaturedProductsTabs.constants'

export const useFilterProducts = (activeTab: Ref<FEATURED_PRODUCTS_TABS>) => {
  return computed(() => {
    const products = [...FEATURED_PRODUCTS] as FeaturedProductType[]

    switch (activeTab.value) {
      case FEATURED_PRODUCTS_TABS.FEATURED:
        return products.filter((product) => product.featured === true)
      case FEATURED_PRODUCTS_TABS.NEW:
        return products.sort((a, b) => b.createdAt.getDate() - a.createdAt.getDate())
      case FEATURED_PRODUCTS_TABS.POPULAR:
        return products.sort((a, b) => b.numberOfSales - a.numberOfSales)
      default:
        return products
    }
  })
}
