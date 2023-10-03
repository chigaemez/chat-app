// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoVwHC6Ljp0qRlXzEN1U3qk-ToPBUhtlg",
  authDomain: "chat-app-f34d6.firebaseapp.com",
  projectId: "chat-app-f34d6",
  storageBucket: "chat-app-f34d6.appspot.com",
  messagingSenderId: "311180743261",
  appId: "1:311180743261:web:7afddf421be7dfd75db3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);