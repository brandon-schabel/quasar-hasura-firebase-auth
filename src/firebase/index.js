import firebase, { initializeApp } from 'firebase'

const config = {
  projectId: process.env.VUE_APP_PROJECT_ID,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN
}

export const app = initializeApp(config)
export const db = app.firestore()
export const namesRef = db.collection('names')
export const auth = app.auth()
export const googleSignInProvider = new firebase.auth.GoogleAuthProvider()
