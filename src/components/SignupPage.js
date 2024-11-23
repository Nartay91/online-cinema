// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import { useState } from "react";

// function SignupPage() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
  
//     function handleSubmit(event) {
//       event.preventDefault();
//       // if (name === 'Nartay' && email === 'nartay123@gmail.com' && password === 123) {
//         navigate('/welcome');
//       // } else {
//         // alert('Имя или логин не совпадают.');
//       // }
//     }
  
//     return (
//       <div className="container">
//         <h1>Get Started Now</h1>
//         <form onSubmit={handleSubmit} id="signupForm">
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               onChange={(event) => setName(event.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="email">Email address</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               onChange={(event) => setEmail(event.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Enter your password" required />
//           </div>
//           <div className="input-group checkbox">
//             <input type="checkbox" 
//             id="terms"
//             onChange={(event) => setPassword(event.target.value)} 
//             required 
//             />
//             <label htmlFor="terms">I agree to the <a href="#!">terms & policy</a></label>
//           </div>
//           <button type="submit" className="btn">Signup</button>
//           <p className="or">Or</p>
//           <div className="social-login">
//             <button className="google-btn">Sign in with Google</button>
//             <button className="apple-btn">Sign in with Apple</button>
//           </div>
//           <p className="sign-in-text">Have an account? <a href="#!">Sign In</a></p>
//         </form>
//       </div>
//     );
//   }

//   export default SignupPage;