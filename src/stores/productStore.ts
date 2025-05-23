import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { ProductType } from '../components/shared/app-product-card/AppProductCard.types'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as ProductType[],
    isLoading: false,
    error: null as string | null
  }),

  getters: {
    featuredProducts: (state) => state.products.filter((product) => product.isFeatured),
    latestProducts: (state) =>
      state.products.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds).slice(0, 8)
  },

  actions: {
    async fetchProducts() {
      if (this.products.length > 0) return

      try {
        this.isLoading = true
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
    }
  }
})
