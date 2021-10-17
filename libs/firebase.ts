import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-bM5HUTYC13ZqatG6C7-5afM0ZCozoKM",
  authDomain: "stripe-live-c2b55.firebaseapp.com",
  projectId: "stripe-live-c2b55",
  storageBucket: "stripe-live-c2b55.appspot.com",
  messagingSenderId: "1011942455545",
  appId: "1:1011942455545:web:51fd9a6930098364be8a28",
};

const app = initializeApp(firebaseConfig);

// 認証
export const auth = getAuth();

// データベース
export const db = getFirestore();

// Functions
export const functions = getFunctions(app, "asia-northeast1");
