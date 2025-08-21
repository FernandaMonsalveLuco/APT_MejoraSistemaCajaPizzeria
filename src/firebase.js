// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSqeWH_cMpwN1arZRB7goh-85vbzRh__0",
  authDomain: "fastpos-b9692.firebaseapp.com",
  projectId: "fastpos-b9692",
  storageBucket: "fastpos-b9692.firebasestorage.app",
  messagingSenderId: "224785835444",
  appId: "1:224785835444:web:85dff8e68750dda9fa3ee1",
  measurementId: "G-6LEB8VD8CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);