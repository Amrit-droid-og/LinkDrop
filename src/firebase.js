import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

/**
 * LinkDrop Firebase Configuration
 * Project: linkdrop-17934 (https://linkdrop.web.app)
 */
export const firebaseConfig = {
  apiKey: "AIzaSyCpw79NhYWIt65bjHVFjLUHacn37B8E3Go",
  authDomain: "linkdrop-17934.firebaseapp.com",
  projectId: "linkdrop-17934",
  storageBucket: "linkdrop-17934.firebasestorage.app",
  messagingSenderId: "113648340252",
  appId: "1:113648340252:web:62c642f3a8426415e9fed9",
  measurementId: "G-EXVESCCX53"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Initialize Analytics (Browser-only)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
