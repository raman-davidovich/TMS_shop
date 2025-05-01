export interface GalleryItem {
  imageURL: string
  buttonTitle: GALLERY_CATEGORIES
}

export enum GALLERY_CATEGORIES {
  HATS = 'HATS',
  SHOES = 'SHOES',
  DRESSES = 'DRESSES',
  BAGS = 'BAGS',
  CLOTHES = 'CLOTHES'
}
