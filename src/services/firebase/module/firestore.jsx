import { firestore, auth } from "./services/firebase/config/firebase";
import { getDocs, getDoc, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

const getMovieList = async () => {
  try {
    const data = await getDocs(moviesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMovieList(filteredData);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

async function GetDocument(ref) {
    try {
      const doc = await getDoc(ref);
      return doc;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
  
async function GetDocuments(ref) {
    try {
        const doc = await getDocs(ref);
        return doc;
    } catch (err) {
        console.error(err);
        return err;
    }
}
  
async function InsertDocument(ref, newMovieTitle, newReleaseDate, isNewMovieOscar) {
    try {
        const docRef = await addDoc(ref, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
        userId: auth?.currentUser?.uid,
        });
        console.log(`Document written with ID: ${docRef.id}`);
        return docRef.id;
    } catch (err) {
        console.error(err);
        return err;
    }
}
  
async function UpdateDocument(path, documentId, updatedTitle) {
    try {
        const docRef = doc(firestore, path, documentId);
        await updateDoc(docRef, { title: updatedTitle });
        console.log(`Document with ID ${documentId} successfully updated.`);
    } catch (err) {
        console.error(err);
        return err;
    }
}
  
async function DeleteDocument(path, documentId) {
    try {
        const docRef = doc(firestore, path, documentId);
        await deleteDoc(docRef);
        console.log(`Document with ID ${documentId} successfully deleted.`);
    } catch (err) {
        console.error(err);
        return err;
    }
}
  
