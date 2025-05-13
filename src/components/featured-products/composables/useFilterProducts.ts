import type { ProductType } from '../../shared/app-product-card/AppProductCard.types'
import { TABS } from '../components/featured-products-tabs/FeaturedProductsTabs.constants'

export const useFilterProducts = (activeTab: TABS, dbProducts: ProductType[]): ProductType[] => {
  const products = [...dbProducts].filter((product) => product.featured === true)

  switch (activeTab) {
    case TABS.FEATURED:
      return products.sort((a, b) => b.price.dollars - a.price.dollars)
    case TABS.NEW:
      return products.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
    case TABS.POPULAR:
      return products.sort((a, b) => b.numberOfSales - a.numberOfSales)
    default:
      return products
  }
}
