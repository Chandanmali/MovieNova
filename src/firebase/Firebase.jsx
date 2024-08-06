
import { initializeApp } from "firebase/app";
 import {getFirestore, collection} from 'firebase/firestore'
 import { getAuth } from "firebase/auth";
//import.meta.env.VITE_SECRETE;


const firebaseConfig = {
  apiKey: "AIzaSyAnI6ryEJ1W1gEdcQvTA4Ei29CgqC7y6VE",
  authDomain: "movieset-5b747.firebaseapp.com",
  projectId: "movieset-5b747",
  storageBucket: "movieset-5b747.appspot.com",
  messagingSenderId: "934449684904",
  appId: "1:934449684904:web:05d36a304232123396fd9d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const moviesRef = collection(db, "movies");
 export const reviewsRef = collection(db, "reviews");
 export const usersRef = collection(db, "users");

export default app;
export const auth = getAuth(app)