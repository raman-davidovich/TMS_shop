<script setup lang="ts">
  import { ref, watchEffect, computed, watch } from 'vue'
  import { useProductStore } from '@/stores'
  import {
    PRODUCT_COLORS,
    PRODUCT_SIZES,
    PRODUCT_BRANDS
  } from '@/components/shared/app-product-card/AppProductCard.types'
  import SearchIcon from './components/SearchBarIcon.vue'

  const props = defineProps<{
    modelValue: {
      category?: string | string[]
      colors?: PRODUCT_COLORS[]
      sizes?: PRODUCT_SIZES[]
      brands?: PRODUCT_BRANDS[]
      searchQuery?: string
      maxPrice?: number
      minPrice?: number
    }
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: Record<string, unknown>): void
  }>()

  const productStore = useProductStore()

  const minPossiblePrice = computed(() => {
    if (productStore.products.length === 0) return 0
    return Math.min(
      ...productStore.products.map((product) => Math.trunc(product.price.value / 100))
    )
  })

  const maxPossiblePrice = computed(() => {
    if (productStore.products.length === 0) return 100
    return Math.max(
      ...productStore.products.map((product) => Math.trunc(product.price.value / 100))
    )
  })

  const localFilters = ref({
    ...props.modelValue,
    category: Array.isArray(props.modelValue.category)
      ? props.modelValue.category
      : props.modelValue.category
        ? [props.modelValue.category]
        : [],
    colors: props.modelValue.colors || [],
    sizes: props.modelValue.sizes || [],
    brands: props.modelValue.brands || [],
    searchQuery: props.modelValue.searchQuery || '',
    minPrice: props.modelValue.minPrice ?? minPossiblePrice.value,
    maxPrice: props.modelValue.maxPrice ?? maxPossiblePrice.value
  })

  const categories = computed(() => {
    return [...new Set(productStore.products.map((product) => product.category))]
  })

  const availableColors = computed(() => Object.values(PRODUCT_COLORS))
  const availableSizes = computed(() => Object.values(PRODUCT_SIZES))
  const availableBrands = computed(() => Object.values(PRODUCT_BRANDS))

  const colorCounts = computed(() => {
    const counts: Record<PRODUCT_COLORS, number> = {} as Record<PRODUCT_COLORS, number>

    availableColors.value.forEach((color) => {
      counts[color] = productStore.products.filter((product) =>
        product.availableColors.includes(color)
      ).length
    })

    return counts
  })

  const sizeDisplayNames: Record<PRODUCT_SIZES, string> = {
    [PRODUCT_SIZES.XL]: 'Extra Large',
    [PRODUCT_SIZES.L]: 'Large',
    [PRODUCT_SIZES.M]: 'Medium',
    [PRODUCT_SIZES.S]: 'Small',
    [PRODUCT_SIZES.XS]: 'Extra Small'
  }

  const brandCounts = computed(() => {
    const counts: Record<PRODUCT_BRANDS, number> = {} as Record<PRODUCT_BRANDS, number>

    availableBrands.value.forEach((brand) => {
      counts[brand] = productStore.products.filter((product) =>
        product.brand.includes(brand)
      ).length
    })

    return counts
  })

  const hasSearchText = computed(() => {
    return localFilters.value.searchQuery.length > 0
  })

  const clearSearchBar = () => {
    localFilters.value.searchQuery = ''
  }

  watchEffect(() => {
    emit('update:modelValue', { ...localFilters.value })
  })

  watch(
    [() => localFilters.value.minPrice, () => localFilters.value.maxPrice],
    ([newMin, newMax]) => {
      if (newMin === null || newMax === null) return

      if (newMin > newMax) {
        localFilters.value.minPrice = newMax
        localFilters.value.maxPrice = newMin
      }

      if (newMin < minPossiblePrice.value) {
        localFilters.value.minPrice = minPossiblePrice.value
      }
      if (newMax > maxPossiblePrice.value) {
        localFilters.value.maxPrice = maxPossiblePrice.value
      }
    }
  )
</script>

<template>
  <div class="product-filters">
    <div class="filter-group">
      <h4>Search Products</h4>
      <div class="search-input-wrapper">
        <SearchIcon v-if="!hasSearchText" class="search-icon" />
        <button v-else class="clear-button" @click="clearSearchBar" aria-label="Clear search bar">
          +
        </button>
        <input
          type="text"
          placeholder="Enter product name..."
          v-model="localFilters.searchQuery"
          class="search-input"
        />
      </div>
    </div>

    <div class="filter-group">
      <h4>Category</h4>
      <div class="categories-list">
        <div v-for="category in categories" :key="category" class="category-item">
          <input
            type="checkbox"
            :id="`category-${category}`"
            :value="category"
            v-model="localFilters.category"
          />
          <label :for="`category-${category}`">{{ category }}</label>
        </div>
      </div>
    </div>

    <div class="filter-group">
      <h4>Color</h4>
      <div class="color-list">
        <div v-for="color in availableColors" :key="color" class="color-item">
          <input
            type="checkbox"
            :id="`color-${color}`"
            :value="color"
            v-model="localFilters.colors"
          />
          <label :for="`color-${color}`"
            >{{ color }}<span class="count">{{ colorCounts[color] }}</span></label
          >
        </div>
      </div>

      <div class="filter-group">
        <h4>Size</h4>
        <div class="sizes-list">
          <div v-for="size in availableSizes" :key="size" class="size-item">
            <input
              type="checkbox"
              :id="`size-${size}`"
              :value="size"
              v-model="localFilters.sizes"
            />
            <label :for="`size-${size}`">{{ sizeDisplayNames[size] }}</label>
          </div>
        </div>
      </div>

      <div class="filter-group">
        <h4>Filter by price</h4>

        <div class="price-range-slider">
          <input
            type="range"
            :min="minPossiblePrice"
            :max="maxPossiblePrice"
            v-model.number="localFilters.minPrice"
            class="slider"
          />
          <input
            type="range"
            :min="minPossiblePrice"
            :max="maxPossiblePrice"
            v-model.number="localFilters.maxPrice"
            class="slider"
          />
        </div>

        <div class="price-inputs">
          <input
            type="number"
            v-model.number="localFilters.minPrice"
            :min="minPossiblePrice"
            :max="maxPossiblePrice"
            class="price-input"
          />
          <input
            type="number"
            v-model="localFilters.maxPrice"
            :min="minPossiblePrice"
            :max="maxPossiblePrice"
            class="price-input"
          />
        </div>
      </div>

      <div class="filter-group">
        <h4>Brand</h4>
        <div class="brands-list">
          <div v-for="brand in availableBrands" :key="brand" class="brand-item">
            <input
              type="checkbox"
              :id="`brand-${brand}`"
              :value="brand"
              v-model="localFilters.brands"
            />
            <label :for="`brand-${brand}`"
              >{{ brand }}<span class="count">{{ brandCounts[brand] }}</span></label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/styles/colors.scss' as colors;

  .product-filters {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    padding: 20px;

    .filter-group {
      margin-bottom: 0;

      h4 {
        color: #555;
        font-weight: 600;
        margin-bottom: 8px;
      }

      .search-input-wrapper {
        position: relative;

        &:focus-within {
          /* stylelint-disable-next-line max-nesting-depth */
          .search-icon,
          .clear-button {
            color: #007bff;
          }
        }
      }

      .search-icon,
      .clear-button {
        color: #777;
        height: 21px;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
      }

      .clear-button {
        align-items: center;
        background-color: colors.$accentElementColor;
        border: none;
        border-radius: 50%;
        color: colors.$primaryFontColor !important;
        cursor: pointer;
        display: flex;
        height: 25px;
        justify-content: center;
        padding: 0;
        pointer-events: all;
        rotate: 45deg;
        width: 25px;
      }

      .search-input {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 12px;
        transition: border-color 0.3s;
        width: 100%;

        &:focus-visible {
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgb(0 123 244 / 25%);
          outline: none;
        }
      }

      .categories-list,
      .colors-list,
      .sizes-list,
      .brands-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 300px;
        overflow-y: auto;
        padding: 5px;
      }

      .category-item,
      .color-item,
      .size-item,
      .brand-item {
        align-items: center;
        display: flex;
        gap: 8px;

        /* stylelint-disable-next-line selector-no-qualifying-type */
        input[type='checkbox'] {
          cursor: pointer;
          height: 18px;
          width: 18px;
        }

        label {
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          transition: color 0.2s;
          user-select: none;
          width: 100%;

          /* stylelint-disable-next-line max-nesting-depth */
          .count {
            color: #777;
            font-size: 0.9em;
          }

          /* stylelint-disable-next-line max-nesting-depth */
          &:hover {
            color: #007bff;

            /* stylelint-disable-next-line max-nesting-depth */
            .count {
              color: #007bff;
            }
          }
        }
      }
    }

    .price-range-slider {
      height: 24px;
      margin: 20px 0;
      position: relative;

      .slider {
        appearance: none;
        background: #ddd;
        height: 4px;
        pointer-events: none;
        position: absolute;
        top: 10px;
        width: 100%;

        &::-webkit-slider-thumb {
          appearance: none;
          background: #007bff;
          border-radius: 50%;
          cursor: pointer;
          height: 18px;
          pointer-events: all;
          position: relative;
          width: 18px;
          z-index: 2;
        }

        &::-moz-range-thumb {
          background: #007bff;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          height: 18px;
          pointer-events: all;
          position: relative;
          width: 18px;
          z-index: 2;
        }
      }
    }

    .price-inputs {
      align-items: center;
      display: flex;
      gap: 10px;
      margin-top: 15px;

      .price-input {
        border: 1px solid #ddd;
        border-radius: 4px;
        flex: 1;
        padding: 8px 12px;
        text-align: center;

        &:focus {
          border-color: #007bff;
          outline: none;
        }
      }

      .price-separator {
        color: #777;
        font-weight: bold;
      }
    }
  }
</style>
