// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9m-slZfSDDPqUGNNvo19KlYWcD-LwGgs",
  authDomain: "btae-react-hanghae.firebaseapp.com",
  projectId: "btae-react-hanghae",
  storageBucket: "btae-react-hanghae.appspot.com",
  messagingSenderId: "2565359629",
  appId: "1:2565359629:web:986a72fd281183fa4f6d44",
  measurementId: "G-3BBS5HBQGJ",
};

// initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//사용 안할 예정
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;
