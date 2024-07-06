import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

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
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, googleProvider, db, storage };
