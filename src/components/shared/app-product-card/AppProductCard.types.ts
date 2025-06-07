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

export enum PRODUCT_CATEGORIES {
  BAGS = 'Bags',
  CLOTHES = 'Clothes',
  HATS = 'Hats',
  SHOES = 'Shoes',
  DRESSES = 'Dresses'
}

export enum PRODUCT_BRANDS {
  ADIDAS = 'Adidas',
  ARMANI = 'Armani',
  CALVIN_KLEIN = 'Calvin Klein',
  COLUMBIA = 'Columbia',
  CONVERSE = 'Converse',
  DOCKERS = 'Dockers'
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
  category: PRODUCT_CATEGORIES
  brand: PRODUCT_BRANDS
}

export type ProductInfoType = Omit<
  ProductType,
  'id' | 'image' | 'price' | 'isFeatured' | 'createdAt' | 'numberOfSales' | 'category' | 'brand'
>
