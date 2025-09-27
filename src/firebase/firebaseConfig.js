import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics"; // Solo en web

const firebaseConfig = {
  apiKey: "AIzaSyCSqeWH_cMpwN1arZRB7goh-85vbzRh__0",
  authDomain: "fastpos-b9692.firebaseapp.com",
  projectId: "fastpos-b9692",
  storageBucket: "fastpos-b9692.appspot.com",
  messagingSenderId: "224785835444",
  appId: "1:224785835444:web:85dff8e68750dda9fa3ee1",
  measurementId: "G-6LEB8VD8CT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app); // Solo en web

export { app, auth, db, storage };
