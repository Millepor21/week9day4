// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Yv8r0TxZ7BRTqykxXZbQOwbb--PA_z4",
  authDomain: "subscription-demo-c99c6.firebaseapp.com",
  projectId: "subscription-demo-c99c6",
  storageBucket: "subscription-demo-c99c6.appspot.com",
  messagingSenderId: "924594221454",
  appId: "1:924594221454:web:0b24573d604c7190f834df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app