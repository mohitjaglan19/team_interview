// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2ec1pwVSCcIyeNRs9qxTF6o1sknRMZf8",
  authDomain: "prepwisely2.firebaseapp.com",
  projectId: "prepwisely2",
  storageBucket: "prepwisely2.firebasestorage.app",
  messagingSenderId: "236714146982",
  appId: "1:236714146982:web:c478adfbd7d782baf30867",
  measurementId: "G-2S0KKMW2PL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

