// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo1s",
  authDomain: "btaae.firebaseapp.com",
  projectId: "btaeanghae",
  storageBucket: "btae.com",
  messagingSenderId: "2529",
  appId: "1183fa4f6d44",
  measurementId: "BBBQGJ",
};

// initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//사용 안할 예정
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;
