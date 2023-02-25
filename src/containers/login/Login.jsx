import React, { useState } from 'react'
//import { Auth } from "../services/firebase/module/Auth";
import './Login.css';

function login() {
  return (
    <div>login</div>
  )
}

export default login
// const login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     signInFun(email, password);
//   }

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-heading">Log In</h2>
//         <form>
//           <input
//             className="login-input"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             className="login-input"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="login-button" type="submit" onClick={handleLogin}>Log In</button>
//           {/* <button className="login-button" type="submit" onClick={Auth.signInWithGoogle}>Sign In With Google</button>
//           <button className="login-button" type="submit" onClick={Auth.logout}>Logout</button> */}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default login