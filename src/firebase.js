

// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoRjcIVBIbRPetmqmwDXDTumQFio3Z0po",
  authDomain: "todo-chat-c595d.firebaseapp.com",
  projectId: "todo-chat-c595d",
  storageBucket: "todo-chat-c595d.appspot.com",
  messagingSenderId: "1095325965914",
  appId: "1:1095325965914:web:d1edad0240812e4b708263",
  measurementId: "G-8FWRM0GK3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
