import featuredProduct1 from '@assets/featuredProduct1.webp'
import featuredProduct2 from '@assets/featuredProduct2.webp'
import featuredProduct3 from '@assets/featuredProduct3.webp'
import featuredProduct4 from '@assets/featuredProduct4.webp'
import latestProduct1 from '@assets/latestProduct1.webp'
import latestProduct2 from '@assets/latestProduct2.webp'
import latestProduct3 from '@assets/latestProduct3.webp'
import latestProduct4 from '@assets/latestProduct4.webp'
import latestProduct5 from '@assets/latestProduct5.webp'
import latestProduct6 from '@assets/latestProduct6.webp'
import latestProduct7 from '@assets/latestProduct7.webp'
import latestProduct8 from '@assets/latestProduct8.webp'
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
    image: latestProduct1,
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
    image: latestProduct2,
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
    image: latestProduct3,
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
    image: latestProduct4,
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
    image: latestProduct5,
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
    image: latestProduct6,
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
    image: latestProduct7,
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
    image: latestProduct8,
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
