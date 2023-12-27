import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCTyUCT3LxdgVoyhfm3kAbKSmFoMThq5fg",
  authDomain: "booking-project-bb7cb.firebaseapp.com",
  projectId: "booking-project-bb7cb",
  storageBucket: "booking-project-bb7cb.appspot.com",
  messagingSenderId: "1015832887297",
  appId: "1:1015832887297:web:13052b33d59b1739ed4000"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};