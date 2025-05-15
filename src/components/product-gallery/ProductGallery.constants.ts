import { GalleryItem, GALLERY_CATEGORIES } from './ProductGallery.types'
import productGalleryBags from '@assets/productGalleryBags.webp'
import productGalleryClothes from '@assets/productGalleryClothes.webp'
import productGalleryDresses from '@assets/productGalleryDresses.webp'
import productGalleryHats from '@assets/productGalleryHats.webp'
import productGalleryShoes from '@assets/productGalleryShoes.webp'

export const GALLERY_ITEMS: GalleryItem[] = [
  { imageURL: productGalleryHats, buttonTitle: GALLERY_CATEGORIES.HATS },
  { imageURL: productGalleryShoes, buttonTitle: GALLERY_CATEGORIES.SHOES },
  { imageURL: productGalleryDresses, buttonTitle: GALLERY_CATEGORIES.DRESSES },
  { imageURL: productGalleryBags, buttonTitle: GALLERY_CATEGORIES.BAGS },
  { imageURL: productGalleryClothes, buttonTitle: GALLERY_CATEGORIES.CLOTHES }
] as const
