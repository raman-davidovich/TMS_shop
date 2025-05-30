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

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency || 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  const formattedPrice = computed<string>(() => {
    return formatter.format(price.value / 100)
  })

  return {
    isLiked,
    shouldAnimate,
    toggleLike,
    formattedPrice
  }
}
