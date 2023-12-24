// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ZWXSf4gu4wclj4GjlN4mKYMwuzG_nco",
  authDomain: "registrationwebsite-be01c.firebaseapp.com",
  projectId: "registrationwebsite-be01c",
  storageBucket: "registrationwebsite-be01c.appspot.com",
  messagingSenderId: "89402464800",
  appId: "1:89402464800:web:3ea766b36e22f79e16ba45",
  measurementId: "G-F5LWYNQBHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app)
export {db};

import React from 'react'

export default function firebase() {
  return (
    <div>firebase</div>
  )
}
