// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUDWt_47YVuKyLzs9-34b4RYrSm1Z_vyQ",
  authDomain: "my-ecommerce-b0955.firebaseapp.com",
  projectId: "my-ecommerce-b0955",
  storageBucket: "my-ecommerce-b0955.appspot.com",
  messagingSenderId: "853013257418",
  appId: "1:853013257418:web:ef024ec5030ac7132be833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}