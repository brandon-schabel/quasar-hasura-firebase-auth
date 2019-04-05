import Vue from 'vue'
import firebase, { initializeApp } from 'firebase'
import { firestorePlugin } from 'vuefire'
import config from './config'

Vue.use(firestorePlugin)

export const app = initializeApp(config)
export const db = app.firestore()
export const namesRef = db.collection('names')
export const auth = app.auth()
export const googleSignInProvider = new firebase.auth.GoogleAuthProvider()
