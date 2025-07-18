// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Importa getAuth

const firebaseConfig = {
  apiKey: "AIzaSyDQ71v0_mibqPEeEfbTda6EE2N_g6OO6aI",
  authDomain: "databasepizzerianostra.firebaseapp.com",
  databaseURL: "https://databasepizzerianostra-default-rtdb.firebaseio.com",
  projectId: "databasepizzerianostra",
  storageBucket: "databasepizzerianostra.firebasestorage.app",
  messagingSenderId: "630249146144",
  appId: "1:630249146144:web:a54572eb3c0f49bb803945",
  measurementId: "G-1LZQL56B2M"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);  // Exporta auth
