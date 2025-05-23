import GridIcon from './components/GridIcon.vue'
import ListIcon from './components/ListIcon.vue'
import type { ViewType } from '../../../product-list/ProductList.types'
import type { Component } from 'vue'

export const VIEW_PICKER_OPTIONS: { type: ViewType; icon: Component }[] = [
  { type: 'grid', icon: GridIcon },
  { type: 'list', icon: ListIcon }
]
