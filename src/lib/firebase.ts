
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "notebook-ai-5a566.firebaseapp.com",
  projectId: "notebook-ai-5a566",
  storageBucket: "notebook-ai-5a566.appspot.com",
  messagingSenderId: "540877627457",
  appId: "1:540877627457:web:512ba98697c4604225a6c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
