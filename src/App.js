import "./App.css";
import { useState } from "react";
import { uploadFile } from "./services/firebase/module/storage";

function App() {

  // File Upload State
  const [fileUpload, setFileUpload] = useState(null);

  const handleUpload = () => {
    uploadFile(fileUpload, "projectFiles/");
  }

  return (
    <div className="App">
      <div>
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={handleUpload}> Upload File </button>
      </div>
    </div>
  );
}

export default App;
