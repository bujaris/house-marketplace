import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7j03cuwDQ-FmALdjHnetHXZLMpQ1Y9u0",
  authDomain: "house-marketplace-app-27a9b.firebaseapp.com",
  projectId: "house-marketplace-app-27a9b",
  storageBucket: "house-marketplace-app-27a9b.appspot.com",
  messagingSenderId: "985294221424",
  appId: "1:985294221424:web:7bdc6ad3693e6a0c0304b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()