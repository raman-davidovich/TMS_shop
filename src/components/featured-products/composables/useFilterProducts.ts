import { computed, type Ref } from 'vue'
import { FEATURED_PRODUCTS } from '../../shared/app-product-card/AppProductCard.constants'
import type { FeaturedProductType } from '../../shared/app-product-card/AppProductCard.types'
import { TABS } from '../components/featured-products-tabs/FeaturedProductsTabs.constants'

export const useFilterProducts = (activeTab: Ref<TABS>) => {
  return computed(() => {
    const products = [...FEATURED_PRODUCTS] as FeaturedProductType[]

    switch (activeTab.value) {
      case TABS.FEATURED:
        return products.filter((product) => product.featured === true)
      case TABS.NEW:
        return products.sort((a, b) => b.createdAt.getDate() - a.createdAt.getDate())
      case TABS.POPULAR:
        return products.sort((a, b) => b.numberOfSales - a.numberOfSales)
      default:
        return products
    }
  })
}
