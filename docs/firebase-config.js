// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT6esMhSJASAWOsd_bgz70p4EKbhO2U_A",
  authDomain: "oldarticles-2fcc4.firebaseapp.com",
  projectId: "oldarticles-2fcc4",
  storageBucket: "oldarticles-2fcc4.appspot.com",
  messagingSenderId: "897871536047",
  appId: "1:897871536047:web:1fb0d7bc29f2d3d76c995a",
  measurementId: "G-TBTCJG5MV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other files
export { auth, createUserWithEmailAndPassword };
