import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB444Spy6Id41_LZplOsqrmnYz8bDtRKgk",
  authDomain: "frontenddevrev.firebaseapp.com",
  projectId: "frontenddevrev",
  storageBucket: "frontenddevrev.appspot.com",
  messagingSenderId: "73289683082",
  appId: "1:73289683082:web:50787c25ea8760f2385d73",
  measurementId: "G-G1WW1E6E7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;