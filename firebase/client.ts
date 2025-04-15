import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT7F5Aum-FLroNwbAcbEiOpmcTSh_oBHE",
  authDomain: "prepwise-3429f.firebaseapp.com",
  projectId: "prepwise-3429f",
  storageBucket: "prepwise-3429f.firebasestorage.app",
  messagingSenderId: "83433720298",
  appId: "1:83433720298:web:d0875a2f841a48beb48a93",
  measurementId: "G-FJ7K8E2FMZ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
