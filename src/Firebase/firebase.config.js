// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0zxaPfbjvzkEwlk-MvqnlsEq3jbFxsU4",
  authDomain: "dragon-news-auth-b2974.firebaseapp.com",
  projectId: "dragon-news-auth-b2974",
  storageBucket: "dragon-news-auth-b2974.appspot.com",
  messagingSenderId: "1021525155542",
  appId: "1:1021525155542:web:3800b6728a732c95cc7377",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
