// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcN2YjbC9el8e5LV-sXHuZFLgSvb4ibI",
  authDomain: "odindogshop.firebaseapp.com",
  projectId: "odindogshop",
  storageBucket: "odindogshop.appspot.com",
  messagingSenderId: "191483386254",
  appId: "1:191483386254:web:de05cc7b4775240aeb2cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);