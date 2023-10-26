// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0fEqtWLmkGk0lADYkLzwMe4ugaxBBWbw",
  authDomain: "opus-mentor.firebaseapp.com",
  projectId: "opus-mentor",
  storageBucket: "opus-mentor.appspot.com",
  messagingSenderId: "408812363076",
  appId: "1:408812363076:web:49763e7e7f86e5ffca4b11",
  measurementId: "G-H9627Z64VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const initFirebase = () => {
  return app;
};

export default {
  app, initFirebase
}