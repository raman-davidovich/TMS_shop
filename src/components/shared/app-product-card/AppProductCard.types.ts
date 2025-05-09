export enum PRODUCT_COLORS {
  BLUE = 'blue',
  GREEN = 'green',
  BROWN = 'brown',
  BLACK = 'black'
}

export enum PRODUCT_SIZES {
  XL = 'XL',
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS'
}

export enum CARD_TYPES {
  FEATURED = 'featured',
  LATEST = 'latest'
}

type ProductColorType = (typeof PRODUCT_COLORS)[keyof typeof PRODUCT_COLORS]
type ProductSizeType = (typeof PRODUCT_SIZES)[keyof typeof PRODUCT_SIZES]
export type ProductPrice = { dollars: number; cents: number }

export type FeaturedProductType = {
  id: number
  image: string
  name: string
  baseColor: string
  price: ProductPrice
  availableColors: ReadonlyArray<ProductColorType>
  availableSizes: ReadonlyArray<ProductSizeType>
  featured: boolean
  createdAt: Date
  numberOfSales: number
}
