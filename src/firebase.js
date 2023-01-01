// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2uJA7utegSL-SLjWAWeDFQuzZxbKKPtI",
  authDomain: "todo-app-8f420.firebaseapp.com",
  projectId: "todo-app-8f420",
  storageBucket: "todo-app-8f420.appspot.com",
  messagingSenderId: "390200850433",
  appId: "1:390200850433:web:9c7c22d64e6bef8beca800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)