import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wonka-ce4b7.firebaseapp.com",
  projectId: "wonka-ce4b7",
  storageBucket: "wonka-ce4b7.appspot.com",
  messagingSenderId: "753079716738",
  appId: "1:753079716738:web:fc2b64e3dc52346cafdd9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);