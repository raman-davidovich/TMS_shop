import type { SortOption } from '../../../../stores/productStore.types'

export const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Price', value: 'price' },
  { label: 'Novelty', value: 'novelty' }
]
