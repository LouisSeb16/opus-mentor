// Import the functions you need from the SDKs you need
import { envConfig } from "@/sdk/config";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: envConfig.default.apiKey,
  authDomain: envConfig.default.authDomain,
  projectId: envConfig.default.projectId,
  storageBucket: envConfig.default.storageBucket,
  messagingSenderId: envConfig.default.messagingSenderId,
  appId: envConfig.default.appId,
  measurementId: envConfig.default.measurementId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const initFirebase = () => {
  return app;
};

export default {
  app, initFirebase, auth
}