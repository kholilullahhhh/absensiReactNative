// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-aZNiMd1RIn1Ktgw2cjzAsruvXXm4hWY",
  authDomain: "attendance-b2bb8.firebaseapp.com",
  projectId: "attendance-b2bb8",
  storageBucket: "attendance-b2bb8.firebasestorage.app",
  messagingSenderId: "658056582236",
  appId: "1:658056582236:web:255959b357c810ffa90299",
  measurementId: "G-P0YQT20LQ2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);