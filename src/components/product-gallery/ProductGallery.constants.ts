import { GalleryItem, GALLERY_CATEGORIES } from './ProductGallery.types'
import productGalleryBagsImage from '@assets/productGalleryBagsImage.webp'
import productGalleryClothesImage from '@assets/productGalleryClothesImage.webp'
import productGalleryDressesImage from '@assets/productGalleryDressesImage.webp'
import productGalleryHatsImage from '@assets/productGalleryHatsImage.webp'
import productGalleryShoesImage from '@assets/productGalleryShoesImage.webp'

export const GALLERY_ITEMS: GalleryItem[] = [
  { imageURL: productGalleryHatsImage, buttonTitle: GALLERY_CATEGORIES.HATS },
  { imageURL: productGalleryShoesImage, buttonTitle: GALLERY_CATEGORIES.SHOES },
  { imageURL: productGalleryDressesImage, buttonTitle: GALLERY_CATEGORIES.DRESSES },
  { imageURL: productGalleryBagsImage, buttonTitle: GALLERY_CATEGORIES.BAGS },
  { imageURL: productGalleryClothesImage, buttonTitle: GALLERY_CATEGORIES.CLOTHES }
] as const
