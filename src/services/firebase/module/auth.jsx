import { auth, googleProvider } from "../config/Firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Auth = (email, password) => {
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
};

export async function signInFun(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
      console.log(`User ${auth?.currentUser?.displayName} successfully logged in.`);
  } catch (err) {
      console.error(err);
      return err;
  }
}