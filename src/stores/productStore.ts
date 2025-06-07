import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { getFirestoreDB } from '../firebase/config'
import {
  ProductType,
  PRODUCT_CATEGORIES
} from '../components/shared/app-product-card/AppProductCard.types'
import { type SortOption } from './productStore.types'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as ProductType[],
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    featuredProducts: (state) => state.products.filter((product) => product.isFeatured),
    latestProducts: (state) =>
      state.products.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds).slice(0, 8),
    uniqueCategories: (state): PRODUCT_CATEGORIES[] => {
      const categories = new Set<PRODUCT_CATEGORIES>()
      state.products.forEach((product) => categories.add(product.category))
      return Array.from(categories)
    }
  },

  actions: {
    async fetchProducts() {
      this.isLoading = true
      this.error = null

      if (this.products.length > 0) return

      try {
        const db = getFirestoreDB()
        const querySnapshot = await getDocs(collection(db, 'products'))
        this.products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          image: `${doc.data().image}?v=${doc.data().updatedAt || Date.now()}`
        })) as ProductType[]

        await Promise.all(
          this.products.map(
            (product: ProductType) =>
              new Promise((resolve) => {
                const img = new Image()
                img.src = product.image
                img.onload = resolve
              })
          )
        )
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch products'
      } finally {
        this.isLoading = false
      }
    },

    getSortedProducts(sortBy: SortOption, products: ProductType[] = this.products): ProductType[] {
      return [...products].sort((a, b) => {
        switch (sortBy) {
          case 'price':
            return b.price.value - a.price.value
          case 'novelty':
            return b.createdAt.seconds - a.createdAt.seconds
          case 'popularity':
          default:
            return b.numberOfSales - a.numberOfSales
        }
      })
    }
  }
})
