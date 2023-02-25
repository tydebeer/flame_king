import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_Api_Key_Firebase,
  authDomain: process.env.REACT_APP_AuthDomain_Firebase,
  projectId: process.env.REACT_APP_ProjectId_Firebase,
  storageBucket: process.env.REACT_APP_StorageBucket_Firebase,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId_Firebase,
  appId: process.env.REACT_APP_AppId_Firebase,
  measurementId:process.env.REACT_APP_MeasurementId_Firebase
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const remoteConfig = getRemoteConfig(app); 