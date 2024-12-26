import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeEZwNbNUtL6hyBH5nYhRtQXLLw23lFl0",
  authDomain: "aashiyan.firebaseapp.com",
  projectId: "aashiyan",
  storageBucket: "aashiyan.firebasestorage.app",
  messagingSenderId: "215938969472",
  appId: "1:215938969472:web:db3ca5507f22e76931db65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
