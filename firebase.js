const firebaseConfig = {
  apiKey: "AIzaSyCJDpMURpH3Za0VWvpRL4jLWjDhfBF4C5M",
  authDomain: "grlnetwork.firebaseapp.com",
  projectId: "grlnetwork",
  storageBucket: "grlnetwork.firebasestorage.app",
  messagingSenderId: "887517900417",
  appId: "1:887517900417:web:e944eba043bca4b8312780"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();