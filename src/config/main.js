// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASBcAdNlhTm6kOGOY9RVeQ2cvr4cwW6Tw",
  authDomain: "shopify-geeks.firebaseapp.com",
  projectId: "shopify-geeks",
  storageBucket: "shopify-geeks.appspot.com",
  messagingSenderId: "705469490475",
  appId: "1:705469490475:web:3fd8c60d2eb08c7b50516e",
  measurementId: "G-0J3P5KRWY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);