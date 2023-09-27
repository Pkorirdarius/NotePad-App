// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0OVvZ5FOFdF3Lg25gtTlK6l3yXN9YUFU",
  authDomain: "react-notes-ce407.firebaseapp.com",
  projectId: "react-notes-ce407",
  storageBucket: "react-notes-ce407.appspot.com",
  messagingSenderId: "497498668416",
  appId: "1:497498668416:web:0a7b927b65a814ba015565",
  measurementId: "G-NY86WVKS80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
