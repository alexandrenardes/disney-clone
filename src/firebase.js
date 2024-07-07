import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtz9M8WWiYh0yK8zLnQvIeenAU_MCiMb8",
  authDomain: "disneyplus-clone-6e332.firebaseapp.com",
  projectId: "disneyplus-clone-6e332",
  storageBucket: "disneyplus-clone-6e332.appspot.com",
  messagingSenderId: "1098997015482",
  appId: "1:1098997015482:web:ce78d2fa79a302f01bf383",
  measurementId: "G-QSQ0PYVTQN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, signInWithPopup };
export default db;
