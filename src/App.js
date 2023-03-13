import React, { useState } from 'react';
import Header from './components/header/Header';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div className="homepage">
      <div className="column__navbar">
        <div className="content">
          <Header title="Skull King" subtext="Firebase Integration" imageref={logo}/>
          <div className="grey-line"/>
          {/* <Social/> */}
        </div>
      </div>
      <div className="column__content">
        <div className="content">
          </div>
      </div>
      <div className="column__profile">
        <div className="content">
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


