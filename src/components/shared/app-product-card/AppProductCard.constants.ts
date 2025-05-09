import featuredProductImage1 from '@assets/featuredProductImage1.webp'
import featuredProductImage2 from '@assets/featuredProductImage2.webp'
import featuredProductImage3 from '@assets/featuredProductImage3.webp'
import featuredProductImage4 from '@assets/featuredProductImage4.webp'
import { PRODUCT_COLORS, PRODUCT_SIZES, FeaturedProductType } from './AppProductCard.types'

export const FEATURED_PRODUCTS: ReadonlyArray<FeaturedProductType> = [
  {
    id: 1,
    image: featuredProductImage1,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 42, cents: 0 },
    availableColors: [PRODUCT_COLORS.BLUE, PRODUCT_COLORS.GREEN, PRODUCT_COLORS.BROWN, PRODUCT_COLORS.BLACK],
    availableSizes: [PRODUCT_SIZES.XL, PRODUCT_SIZES.L, PRODUCT_SIZES.M, PRODUCT_SIZES.S, PRODUCT_SIZES.XS],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 2,
    image: featuredProductImage2,
    name: 'Cozy t-shirt',
    baseColor: '(White)',
    price: { dollars: 32, cents: 0 },
    availableColors: [PRODUCT_COLORS.BLUE, PRODUCT_COLORS.GREEN, PRODUCT_COLORS.BROWN],
    availableSizes: [PRODUCT_SIZES.XL, PRODUCT_SIZES.L, PRODUCT_SIZES.M, PRODUCT_SIZES.S],
    featured: false,
    createdAt: new Date('2021-7-30'),
    numberOfSales: 2000
  },
  {
    id: 3,
    image: featuredProductImage3,
    name: 'Modern t-shirt',
    baseColor: '(White)',
    price: { dollars: 22, cents: 0 },
    availableColors: [PRODUCT_COLORS.BLUE, PRODUCT_COLORS.GREEN],
    availableSizes: [PRODUCT_SIZES.XL, PRODUCT_SIZES.L, PRODUCT_SIZES.M],
    featured: true,
    createdAt: new Date('2022-8-16'),
    numberOfSales: 3000
  },
  {
    id: 4,
    image: featuredProductImage4,
    name: 'Practical suspenders',
    baseColor: '(Brown)',
    price: { dollars: 12, cents: 0 },
    availableColors: [PRODUCT_COLORS.BLUE],
    availableSizes: [PRODUCT_SIZES.XL, PRODUCT_SIZES.L],
    featured: false,
    createdAt: new Date('2023-9-22'),
    numberOfSales: 4000
  }
] as const
