import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail, // Import this function
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAtcWcqPrAc1w25zVcLdOs3CB02Px7YzqQ",
  authDomain: "netflix-clone-312f9.firebaseapp.com",
  projectId: "netflix-clone-312f9",
  storageBucket: "netflix-clone-312f9.appspot.com",
  messagingSenderId: "804060127727",
  appId: "1:804060127727:web:cd038af37b6d7a50cf161a",
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user to Firestore 'users' collection
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      alert(
        "Invalid credentials provided. Please check your inputs and try again."
      );
    } else {
      alert(`Error: ${error.code} - ${error.message}`);
    }
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      alert(
        "Invalid credentials provided. Please check your email and password."
      );
    } else {
      alert(`Error: ${error.code} - ${error.message}`);
    }
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(`Error: ${error.code} - ${error.message}`);
  }
};

// Password reset function
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    alert(`Error: ${error.code} - ${error.message}`);
  }
};

// Export authentication and database functions
export { auth, db, login, signup, logout, resetPassword }; // Include resetPassword
