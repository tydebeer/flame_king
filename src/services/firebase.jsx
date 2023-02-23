import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyB8FEC-LVWj5Cc7lMtpTXeuNaJA1zF17ZA",
  authDomain: "kaldin-villa.firebaseapp.com",
  projectId: "kaldin-villa",
  storageBucket: "kaldin-villa.appspot.com",
  messagingSenderId: "849328562416",
  appId: "1:849328562416:web:412b080b502744faa92235",
  measurementId: "G-T7Y1Z34LQL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const remoteConfig = getRemoteConfig(app);