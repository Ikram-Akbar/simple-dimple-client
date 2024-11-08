// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZmkjR0hlf_nk3FwGyjUaSpOroVksLlDI",
    authDomain: "simple-dimple-af6e6.firebaseapp.com",
    projectId: "simple-dimple-af6e6",
    storageBucket: "simple-dimple-af6e6.firebasestorage.app",
    messagingSenderId: "48283009570",
    appId: "1:48283009570:web:1dcbc4fe50d0ad3992807b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);