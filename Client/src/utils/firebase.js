import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ec4ce.firebaseapp.com",
  projectId: "interviewiq-ec4ce",
  storageBucket: "interviewiq-ec4ce.firebasestorage.app",
  messagingSenderId: "107892257725",
  appId: "1:107892257725:web:cd84c85a602a52d29018d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}