import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyArN99eD8_VUXBSQ1x2ZDEPHpaE5dO61Os",
  authDomain: "share-thoughts-7568d.firebaseapp.com",
  databaseURL: "https://share-thoughts-7568d-default-rtdb.firebaseio.com",
  projectId: "share-thoughts-7568d",
  storageBucket: "share-thoughts-7568d.appspot.com",
  messagingSenderId: "882083119512",
  appId: "1:882083119512:web:683628ab5ca7cc39d46bed"
})

export const auth = app.auth()
export const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export const thoughts = db.collection("thoughts")

export default app
