import { storage } from "../config/Firebase";
import { ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";

export const uploadFile = async (file, path) => {
    if (!file) return;
  
    const filesFolderRef = ref(storage, path + `${file.name}`);
  
    try {
      await uploadBytes(filesFolderRef, file);
      console.log(`File "${file.name}" uploaded successfully.`);
    } catch (err) {
      console.error(`Failed to upload file "${file.name}": ${err.message}`);
    }
  };

function deleteFile(path) {
  const fileRef = ref(storage, path);
  deleteObject(fileRef)
    .then(() => {
      console.log("File deleted successfully.");
    })
    .catch((error) => {
      console.error("Error deleting file: ", error);
    });
}
  
function getDownloadUrl(path) {
  const fileRef = ref(storage, path);
  getDownloadURL(fileRef)
    .then((url) => {
      console.log("Download URL: ", url);
    })
    .catch((error) => {
      console.error("Error getting download URL: ", error);
    });
}
  
  
  
  