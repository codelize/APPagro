// Firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhz_CsHuZJwVfy6BA64TZCAgB5eD-e-Ow",
  authDomain: "meuappreactnative-f8a3d.firebaseapp.com",
  projectId: "meuappreactnative-f8a3d",
  storageBucket: "meuappreactnative-f8a3d.appspot.com",
  messagingSenderId: "301021775058",
  appId: "1:301021775058:web:886fffbdb255b6eb7e190b",
  measurementId: "G-3N9T4KQNCB"
};

// Inicializando o Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
