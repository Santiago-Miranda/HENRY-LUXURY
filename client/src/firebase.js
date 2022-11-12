// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6YgOxS19tYrnmI2NiidZBJH3TupYZb2w",
  authDomain: "authgooge.firebaseapp.com",
  projectId: "authgooge",
  storageBucket: "authgooge.appspot.com",
  messagingSenderId: "672386801802",
  appId: "1:672386801802:web:ad4bb804bcbf3e095f8d73",
  measurementId: "G-ER6Q76WDXK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


