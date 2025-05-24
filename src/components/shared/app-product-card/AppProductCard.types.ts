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
  LATEST = 'latest',
  LONG = 'long'
}

export type ProductPrice = { value: number; currency?: string }

export type ProductType = {
  id: string
  image: string
  name: string
  baseColor: string
  price: ProductPrice
  availableColors: PRODUCT_COLORS[]
  availableSizes: PRODUCT_SIZES[]
  isFeatured: boolean
  createdAt: { seconds: number; nanoseconds: number }
  numberOfSales: number
}

export type ProductInfoType = Omit<
  ProductType,
  'id' | 'image' | 'price' | 'isFeatured' | 'createdAt' | 'numberOfSales'
>
