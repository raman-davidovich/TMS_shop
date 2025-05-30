import { FirebaseApp } from 'firebase/app'
import { Firestore } from 'firebase/firestore'

declare module '@/firebase/config' {
  export const db: Firestore
  export const app: FirebaseApp
}
