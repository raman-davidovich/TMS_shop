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

export type ProductPrice = { dollars: number; cents: number }

export type ProductType = {
  id: string
  image: string
  name: string
  baseColor: string
  price: ProductPrice
  availableColors: PRODUCT_COLORS[]
  availableSizes: PRODUCT_SIZES[]
  featured: boolean
  createdAt: { seconds: number; nanoseconds: number }
  numberOfSales: number
}
