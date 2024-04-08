// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmMlipwyDuU39B_Oz6j3teU0LClMBZkkk",
  authDomain: "shamah-98c51.firebaseapp.com",
  projectId: "shamah-98c51",
  storageBucket: "shamah-98c51.appspot.com",
  messagingSenderId: "359165137080",
  appId: "1:359165137080:web:aae5d82aa90cc61cc0244d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app