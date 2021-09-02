import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACLH75h48UPZX8CMC1v7p8ltvN72yrAdk",
  authDomain: "neo-chat-5f0c0.firebaseapp.com",
  projectId: "neo-chat-5f0c0",
  storageBucket: "neo-chat-5f0c0.appspot.com",
  messagingSenderId: "211847810960",
  appId: "1:211847810960:web:a060e2043d230a089aed15",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Export auth, googleAuthProvider, facebookAuthProvider
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
