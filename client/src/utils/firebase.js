import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-25519.firebaseapp.com",
  projectId: "interviewiq-25519",
  storageBucket: "interviewiq-25519.firebasestorage.app",
  messagingSenderId: "521489385123",
  appId: "1:521489385123:web:f25058bca0da563329e116",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };