import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT5yA6SsgatexvDQm_0IY0zfleDDZDHKE",
  authDomain: "house-marketplace-46686.firebaseapp.com",
  projectId: "house-marketplace-46686",
  storageBucket: "house-marketplace-46686.appspot.com",
  messagingSenderId: "471104305574",
  appId: "1:471104305574:web:d0211febceddd2c507b767"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()