// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importa las funciones adicionales que necesites, como initializeApp
import { getApps, getApp } from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGX5w64BdeTAGdnPk_ceSb5cQPNtrrU20",
  authDomain: "proyecto-c1114.firebaseapp.com",
  databaseurl: "https://proyecto-c1114-default-rtdb.firebaseio.com",
  projectId: "proyecto-c1114",
  storageBucket: "proyecto-c1114.appspot.com",
  messagingSenderId: "871398319306",
  appId: "1:871398319306:web:e0e1b02aa23a2e92b00033"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


console.log(app);

export default app;

