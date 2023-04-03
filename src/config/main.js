import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyASBcAdNlhTm6kOGOY9RVeQ2cvr4cwW6Tw",
  authDomain: "shopify-geeks.firebaseapp.com",
  projectId: "shopify-geeks",
  storageBucket: "shopify-geeks.appspot.com",
  messagingSenderId: "705469490475",
  appId: "1:705469490475:web:3fd8c60d2eb08c7b50516e",
  measurementId: "G-0J3P5KRWY2"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);