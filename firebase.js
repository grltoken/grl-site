import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJDpMURpH3Za0VWvpRL4jLWjDhfBF4C5M",
  authDomain: "grlnetwork.firebaseapp.com",
  projectId: "grlnetwork",
  storageBucket: "grlnetwork.firebasestorage.app",
  messagingSenderId: "887517900417",
  appId: "1:887517900417:web:d6bfd784e762bbd6312780"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
