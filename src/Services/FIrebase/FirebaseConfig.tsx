// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9XOECMJ2HQq3oQZNp-KoBzcXwrj3ZgoM",
  authDomain: "fiabilaspurcgcom.firebaseapp.com",
  databaseURL: "https://fiabilaspurcgcom-default-rtdb.firebaseio.com",
  projectId: "fiabilaspurcgcom",
  storageBucket: "fiabilaspurcgcom.appspot.com",
  messagingSenderId: "1073082061438",
  appId: "1:1073082061438:web:7aeed4f086594387f5be2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const database = getDatabase(app);
export default app
