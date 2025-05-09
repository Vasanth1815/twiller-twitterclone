
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB66WqoturFJyWM8A_xgf9UikNX9EjlJns",
  authDomain: "twiller-d1851.firebaseapp.com",
  projectId: "twiller-d1851",
  storageBucket: "twiller-d1851.firebasestorage.app",
  messagingSenderId: "620711838498",
  appId: "1:620711838498:web:223e24f7117c2fad3bdb7b",
  measurementId: "G-B333FGZ9BF"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
// const analytics = getAnalytics(app);