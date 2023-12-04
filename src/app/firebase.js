// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf3mTzXmt2-9Q2dnCCzFVEHm-ErsMArrk",
  authDomain: "personal-blog-chat.firebaseapp.com",
  projectId: "personal-blog-chat",
  storageBucket: "personal-blog-chat.appspot.com",
  messagingSenderId: "953105319103",
  appId: "1:953105319103:web:c23fee96516c423a7b720a",
  measurementId: "G-T91QV6E173",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
