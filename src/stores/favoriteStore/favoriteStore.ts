import { defineStore } from 'pinia'
import { MAX_FAVORITES } from './favoriteStore.constants'
import { useProductStore } from '../productStore'

export const useFavoriteStore = defineStore('favorites', {
  state: () => ({
    favoriteIds: [] as string[],
    error: null as string | null
  }),

  getters: {
    isFavorite: (state) => (productId: string) => state.favoriteIds.includes(productId),
    favoriteProducts: (state) => {
      const productStore = useProductStore()
      return productStore.products.filter((p) => state.favoriteIds.includes(p.id))
    }
  },

  actions: {
    initFromStorage() {
      try {
        const stored = localStorage.getItem('favorites')
        this.favoriteIds = stored ? JSON.parse(stored) : []
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to load favorites'
        this.favoriteIds = []
      }
    },

    toggleFavorite(productId: string) {
      try {
        if (this.favoriteIds.length >= MAX_FAVORITES && !this.isFavorite(productId)) {
          alert(`Maximum ${MAX_FAVORITES} favorites allowed`)
          return
        }

        const index = this.favoriteIds.indexOf(productId)
        if (index > -1) {
          this.favoriteIds.splice(index, 1)
        } else {
          this.favoriteIds.push(productId)
        }

        this.saveToLocalStorage()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to load favorites'
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.favoriteIds))
    }
  }
})
