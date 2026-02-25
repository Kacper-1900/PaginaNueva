// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkgpeAjb2dMv7FhyMBQUBFmwUJdkkSjBY",
  authDomain: "pictureskacper.firebaseapp.com",
  databaseURL: "https://pictureskacper-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pictureskacper",
  storageBucket: "pictureskacper.firebasestorage.app",
  messagingSenderId: "354797374621",
  appId: "1:354797374621:web:11332125855b80eaf7d874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;