// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore, collection} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn-9dZuAlxLwFlHJwfbpFjxs9m_BZsFLc",
  authDomain: "react-notes-51cd9.firebaseapp.com",
  projectId: "react-notes-51cd9",
  storageBucket: "react-notes-51cd9.appspot.com",
  messagingSenderId: "13808323460",
  appId: "1:13808323460:web:b4f93172e6ff11e16c6bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notescollection = collection(db, "notes")