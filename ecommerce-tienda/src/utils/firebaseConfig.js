// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxFkwlbhBbhakuT60ibz51QCJrBIfpr8",
  authDomain: "ecommerce-musica-reactjs.firebaseapp.com",
  projectId: "ecommerce-musica-reactjs",
  storageBucket: "ecommerce-musica-reactjs.appspot.com",
  messagingSenderId: "1076583114192",
  appId: "1:1076583114192:web:de43b51b2d09910a1d85d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);