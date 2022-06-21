// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy9tHNL0-ZKaSN1NwNbQe1R53i73dEX5k",
  authDomain: "budget-app-e2a28.firebaseapp.com",
  projectId: "budget-app-e2a28",
  storageBucket: "budget-app-e2a28.appspot.com",
  messagingSenderId: "564483188585",
  appId: "1:564483188585:web:c7ccd58a020d06e2f83ff8",
  measurementId: "G-H5MDZFK3KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
