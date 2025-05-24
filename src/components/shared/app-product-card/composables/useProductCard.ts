import { computed, ref, type Ref, type ComputedRef } from 'vue'
import type { ProductPrice } from '../AppProductCard.types'

interface ProductCardComposable {
  isLiked: Ref<boolean>
  shouldAnimate: Ref<boolean>
  toggleLike: () => void
  formattedPrice: ComputedRef<string>
}

export const useProductCard = (price: ProductPrice): ProductCardComposable => {
  const isLiked = ref<boolean>(false)
  const shouldAnimate = ref<boolean>(false)

  const toggleLike = (): void => {
    isLiked.value = !isLiked.value
    shouldAnimate.value = true
    setTimeout(() => (shouldAnimate.value = false), 400)
  }

  const formattedPrice = computed<string>(() => {
    return `$${price.dollars}.${price.cents.toString().padStart(2, '0')}`
  })

  return {
    isLiked,
    shouldAnimate,
    toggleLike,
    formattedPrice
  }
}
