import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCkHns80efowFIUCwJUEa5kKm0enGfJzOc",
  authDomain: "openticket-ba157.firebaseapp.com",
  projectId: "openticket-ba157",
  storageBucket: "openticket-ba157.appspot.com",
  messagingSenderId: "291678560272",
  appId: "1:291678560272:web:d2548e1a8bbb3e5085aa95"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp}