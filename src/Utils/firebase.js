// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv1R14fK0vTtXaOjSU8SI6WjFbRTwyFno",
  authDomain: "photomall-1356a.firebaseapp.com",
  projectId: "photomall-1356a",
  storageBucket: "photomall-1356a.appspot.com",
  messagingSenderId: "744543149093",
  appId: "1:744543149093:web:fd80e5340a049debc0b3cc",
  measurementId: "G-WM7WFF9HK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();