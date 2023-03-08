import './header.css';
import { FaHome,  } from 'react-icons/fa';

export const HomeNav = ({ text }, { ref }) => (
  <div className='header'>
    <a href={ref} rel="noopener noreferrer">
      <FaHome/> {text}
    </a>
  </div>
);

export const FirebaseNav = ({ text }, { ref }) => (
  <div className='header'>
    <a href={ref} rel="noopener noreferrer">
      <TbBrandFirebase/> {text}
    </a>
  </div>
);

export const SettingsNav = ({ text }, { ref }) => (
  <div className='header'>
    <a href={ref} rel="noopener noreferrer">
      <FiSettings/> {text}
    </a>
  </div>
);



// import React from 'react';
// import './feature.css';

// const Feature = ({ title, text }) => (
//   <div className="gpt3__features-container__feature">
//     <div className="gpt3__features-container__feature-title">
//       <div />
//       <h1>{title}</h1>
//     </div>
//     <div className="gpt3__features-container_feature-text">
//       <p>{text}</p>
//     </div>
//   </div>
// );

//export default Feature;