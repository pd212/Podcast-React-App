// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjzbdqzuuwKxTu16GM_oSCG1z-jzt8AX0",
  authDomain: "podcast-app-react-be77a.firebaseapp.com",
  projectId: "podcast-app-react-be77a",
  storageBucket: "podcast-app-react-be77a.appspot.com",
  messagingSenderId: "815358558566",
  appId: "1:815358558566:web:5d5bc0a37316933f33c8a7",
  measurementId: "G-K3P63RGY8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {auth, db, storage};
// const analytics = getAnalytics(app);