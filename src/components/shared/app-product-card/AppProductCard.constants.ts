import featuredProductImage1 from '@assets/featuredProductImage1.webp'
import featuredProductImage2 from '@assets/featuredProductImage2.webp'
import featuredProductImage3 from '@assets/featuredProductImage3.webp'
import featuredProductImage4 from '@assets/featuredProductImage4.webp'
import latestProductImage1 from '@assets/latestProductImage1.webp'
import latestProductImage2 from '@assets/latestProductImage2.webp'
import latestProductImage3 from '@assets/latestProductImage3.webp'
import latestProductImage4 from '@assets/latestProductImage4.webp'
import latestProductImage5 from '@assets/latestProductImage5.webp'
import latestProductImage6 from '@assets/latestProductImage6.webp'
import latestProductImage7 from '@assets/latestProductImage7.webp'
import latestProductImage8 from '@assets/latestProductImage8.webp'
import { PRODUCT_COLORS, PRODUCT_SIZES, FeaturedProductType } from './AppProductCard.types'

export const FEATURED_PRODUCTS: ReadonlyArray<FeaturedProductType> = [
  {
    id: 1,
    image: featuredProduct1,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 42, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 2,
    image: featuredProduct2,
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
    image: featuredProduct3,
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
    image: featuredProduct4,
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

export const LATEST_PRODUCTS: ReadonlyArray<FeaturedProductType> = [
  {
    id: 1,
    image: latestProductImage1,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 2,
    image: latestProductImage2,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 3,
    image: latestProductImage3,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 4,
    image: latestProductImage4,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 5,
    image: latestProductImage5,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 6,
    image: latestProductImage6,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 7,
    image: latestProductImage7,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  },
  {
    id: 8,
    image: latestProductImage8,
    name: 'Elegant blouse',
    baseColor: '(Red)',
    price: { dollars: 32, cents: 0 },
    availableColors: [
      PRODUCT_COLORS.BLUE,
      PRODUCT_COLORS.GREEN,
      PRODUCT_COLORS.BROWN,
      PRODUCT_COLORS.BLACK
    ],
    availableSizes: [
      PRODUCT_SIZES.XL,
      PRODUCT_SIZES.L,
      PRODUCT_SIZES.M,
      PRODUCT_SIZES.S,
      PRODUCT_SIZES.XS
    ],
    featured: true,
    createdAt: new Date('2020-01-25'),
    numberOfSales: 1000
  }
]
