// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDCHu0cZq9Rivjf5gv1h9VNj7nAuqt2lkA",
  authDomain: "ecommerce-planetprodigital.firebaseapp.com",
  projectId: "ecommerce-planetprodigital",
  storageBucket: "ecommerce-planetprodigital.appspot.com",
  messagingSenderId: "753544123905",
  appId: "1:753544123905:web:a67e70b8f137d562ce9200",
  measurementId: "G-VZ68M69W4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)