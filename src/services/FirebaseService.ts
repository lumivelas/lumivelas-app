// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBicacet4VlAm_IVHYr_50dcOuFCXweZ78",
  authDomain: "lumi-velas.firebaseapp.com",
  projectId: "lumi-velas",
  storageBucket: "lumi-velas.firebasestorage.app",
  messagingSenderId: "861416501996",
  appId: "1:861416501996:web:4a5d2cbb22ce588ba22bc9",
  measurementId: "G-7YYQHTQPEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);