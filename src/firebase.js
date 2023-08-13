import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFMdBSvnZVp0wJWCMbZBIJobI3kL0iJSY",
  authDomain: "react-firebase-auth-2b1f9.firebaseapp.com",
  projectId: "react-firebase-auth-2b1f9",
  storageBucket: "react-firebase-auth-2b1f9.appspot.com",
  messagingSenderId: "20008163014",
  appId: "1:20008163014:web:5ebd076eef61d3cc8ba9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const createUser = async (email, password ) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInUser = async (email, password ) => {
  return signInWithEmailAndPassword(auth, email, password)
}