import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: 'AIzaSyCND3aIQcS8gDvd1-L7bDW5b5UvAIJB20k',
  authDomain: 'tms-shop-25642.firebaseapp.com',
  projectId: 'tms-shop-25642',
  storageBucket: 'tms-shop-25642.firebasestorage.app',
  messagingSenderId: '136308930036',
  appId: '1:136308930036:web:e4412c0789a1bd1a7235a1',
  measurementId: 'G-QKJZ1DMF79'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export const initializeFirebase = async () => {
  await signInAnonymously(auth)
  return { app, db, auth }
}

export const getFirestoreDB = () => db
