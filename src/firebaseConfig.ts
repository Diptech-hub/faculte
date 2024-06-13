// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9m346v7lIBNkVpJpZtGEAU1acBAWQGwo",
  authDomain: "faculte-15087.firebaseapp.com",
  projectId: "faculte-15087",
  storageBucket: "faculte-15087.appspot.com",
  messagingSenderId: "364185073098",
  appId: "1:364185073098:web:e5141ffc670fea6e9ccb33",
  measurementId: "G-Z0D0J6PVKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();