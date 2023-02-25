import React from 'react'
import { Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
  </div>
);

export default App

// import { useState } from "react";
// import { uploadFile } from "./services/firebase/module/Storage";

// function App() {

//   // File Upload State
//   const [fileUpload, setFileUpload] = useState(null);

//   const handleUpload = () => {
//     uploadFile(fileUpload, process.env.REACT_APP_FilePath_Firebase);
//   }

//   return (
//     <div className="App">
//       <div>
//         <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
//         <button onClick={handleUpload}> Upload File </button>
//       </div>
//     </div>
//   );
// }

// export default App;