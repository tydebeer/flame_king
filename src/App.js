import React from 'react';
import './App.css';

function App() {
  return (
    <div className="homepage">
      <div className="column__navbar">
        <div className="content">
          <h2>Column 1</h2>
          <p>This is the content for column 1.</p>
        </div>
      </div>
      <div className="column__content">
        <div className="content">
            <h2>Column 1</h2>
            <p>This is the content for column 1.</p>
          </div>
      </div>
      <div className="column__profile">
        <div className="content">
            <h2>Column 1</h2>
            <p>This is the content for column 1.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
