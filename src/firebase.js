// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJBUVY0yjC6gDH2XlHyUjjWrZbNzrumXQ",
  authDomain: "fir-react-todo-71212.firebaseapp.com",
  projectId: "fir-react-todo-71212",
  storageBucket: "fir-react-todo-71212.appspot.com",
  messagingSenderId: "328949738587",
  appId: "1:328949738587:web:5b66d1679762d22d72e37e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;