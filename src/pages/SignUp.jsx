import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom"; 
import useAuthStore from "../store/authStore";
import "./SignUp.css";
import line from "../components/assets/line_sign.svg";
import name from "../components/assets/edit-name.svg";
import google from "../components/assets/Gmail.svg";
import post from "../components/assets/post.svg";
import lock from "../components/assets/lock.svg";
import poster from "../components/assets/poster.png";

const SignUp = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login); 
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: localStorage.getItem("rememberedEmail") || "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);
  const toggleForm = () => setIsLogin((prev) => !prev);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("rememberedEmail");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", formData.email);
    }

    const userData = { email: formData.email, name: formData.name };
    login(userData);
    
    setTimeout(() => {
      setFormData({ email: "", password: "", name: "", confirmPassword: "" });
      navigate("/");
  }, 100);
  };

  return (
    <div className="signup-container">
      <div className="left__side__sign_in">
        <div className={`flip-container ${isLogin ? "flipped" : ""}`}>
          <div className="flipper">
            <div className="signup-form form">
              <button className="google__signin">
                <img src={google} alt="" />Sign in with Google
              </button>
              <div className="divider">
                <div className="divider2">
                  <img src={line} alt="" />
                  <p className="or">or</p>
                  <img src={line} alt="" />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <label className="labels_sign_in">Name</label>
                <img className="name__post_sign" src={name} alt="" />
                <input
                  className="inputs__sign_in"
                  type="text"
                  name="name"
                  placeholder="Enter your first name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="labels_sign_in">Email</label>
                <img className="name__email_sign" src={post} alt="" />
                <input
                  className="inputs__sign_in"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="password-field">
                  <label className="labels_sign_in">Password</label>
                  <img className="name__password_sign" src={lock} alt="" />
                  <input
                    className="inputs__sign_in"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>
                <div className="password-field">
                  <label className="labels_sign_in">Confirm Password</label>
                  <img className="name__password_sign" src={lock} alt="" />
                  <input
                    className="inputs__sign_in"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <div type="button" onClick={toggleConfirmPasswordVisibility} className="toggle-password">
                    {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>
                <button className="sign_in_btn" type="submit">Create an account</button>
              </form>
              <p className="login-link">
                Already have an account? 
                <button onClick={toggleForm} className="toggle-link">Log In</button>
              </p>
            </div>

            <div className="login-form form">
              <button className="google__signin">
                <img src={google} alt="" />Sign in with Google
              </button>
              <div className="divider">
                <div className="divider2">
                  <img src={line} alt="" />or<img src={line} alt="" />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <label className="labels_sign_in">Email</label>
                <img className="name__email_login" src={post} alt="" />
                <input
                  className="inputs__sign_in"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="password-field">
                  <label className="labels_sign_in">Password</label>
                  <img className="name__password_login" src={lock} alt="" />
                  <input
                    className="inputs__sign_in"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
                    {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>
                <div className="remember-me">
                  <input className="checkbox__circle"
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMe}
                  />
                  <label className="remember" htmlFor="rememberMe">Remember me</label>
                  <span className="forgot-password">Forgot Password?</span>
                </div>
                <button className="sign_in_btn" type="submit">Log In</button>
              </form>
              <p className="login-link">
                Don't have an account? 
                <button onClick={toggleForm} className="toggle-link">Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="poster" src={poster} alt="" />
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; 
// import useAuthStore from "../store/authStore";
// import "./SignUp.css";
// import line from "../components/assets/line_sign.svg";
// import name from "../components/assets/edit-name.svg";
// import google from "../components/assets/Gmail.svg";
// import post from "../components/assets/post.svg";
// import lock from "../components/assets/lock.svg";
// import poster from "../components/assets/poster.png";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const login = useAuthStore((state) => state.login); 
//   const [isLogin, setIsLogin] = useState(false); // 🚀 Переключение формы
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     confirmPassword: "",
//   });

//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);
//   const toggleForm = () => setIsLogin((prev) => !prev); // 🚀 Переключение между входом и регистрацией

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const userData = { email: formData.email, name: formData.name };
//     login(userData);
//     console.log("User after login:", useAuthStore.getState().user);
    
//     navigate("/"); // Перенаправление после входа или регистрации
//   };

//   return (
//     <div className="signup-container">
//       <div className="left__side__sign_in">
//     <div className={`flip-container ${isLogin ? "flipped" : ""}`}>
//       <div className="flipper">
//         {/* Форма регистрации */}
//         <div className="signup-form form">
//           <button className="google__signin"><img src={google} alt="" />Sign in with Google</button>
//           <div className="divider">
//             <div className="divider2"><img src={line} alt="" /><p className="or">or</p><img src={line} alt="" /></div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <label className="labels_sign_in">Name</label>
//             <img className="name__post_sign" src={name} alt="" />
//             <input className="inputs__sign_in"
//               type="text"
//               name="name"
//               placeholder="Enter your first name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <label className="labels_sign_in">Email</label>
//             <img className="name__email_sign" src={post} alt="" />
//             <input className="inputs__sign_in"
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <div className="password-field">
//             <label className="labels_sign_in">Password</label>
//               <img className="name__password_sign" src={lock} alt="" />
//               <input className="inputs__sign_in"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Create a password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
//                 {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//               </div>
//             </div>
//             <div className="password-field">
//             <label className="labels_sign_in">Confirm Password</label>
//               <img className="name__password_sign" src={lock} alt="" />
//               <input className="inputs__sign_in"
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//               <div type="button" onClick={toggleConfirmPasswordVisibility} className="toggle-password">
//                 {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//               </div>
//             </div>
//             <button className="sign_in_btn" type="submit">Create an account</button>
//           </form>
//           <p className="login-link">
//             Already have an account? 
//             <button onClick={toggleForm} className="toggle-link">Log In</button>
//           </p>
//         </div>

//         {/* Форма логина */}
//         <div className="login-form form">
//           <button className="google__signin"><img src={google} alt="" />Sign in with Google</button>
//           <div className="divider">
//             <div className="divider2"><img src={line} alt="" />or<img src={line} alt="" /></div>
//           </div>

//           <form onSubmit={handleSubmit}>
//           <label className="labels_sign_in">Email</label>
//             <img className="name__email_login" src={post} alt="" />
//             <input className="inputs__sign_in"
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <div className="password-field">
//             <label className="labels_sign_in">Password</label>
//             <div></div>
//               <img className="name__password_login" src={lock} alt="" />
//               <input className="inputs__sign_in"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
//                 {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//               </div>
//             </div>
//             <button className="sign_in_btn" type="submit">Log In</button>
//           </form>
//           <p className="login-link">
//             Don't have an account? 
//             <button onClick={toggleForm} className="toggle-link">Sign Up</button>
//           </p>
//         </div>
//       </div>
//     </div>
//     </div>
//     <div>
//       <img className="poster" src={poster} alt="" />
//     </div>
//     </div>
//   );
// };

// export default SignUp;



// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; 
// import useAuthStore from "../store/authStore";
// import "./SignUp.css";
// import line from "../components/assets/line_sign.svg";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const login = useAuthStore((state) => state.login); 
//   const [isLogin, setIsLogin] = useState(false); // 🚀 Переключение формы
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//     confirmPassword: "",
//   });

//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);
//   const toggleForm = () => setIsLogin((prev) => !prev); // 🚀 Переключение между входом и регистрацией

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const userData = { email: formData.email, name: formData.name };
//     login(userData);
//     console.log("User after login:", useAuthStore.getState().user);
    
//     navigate("/"); // Перенаправление после входа или регистрации
//   };

//   return (
//     <div className="signup-container">
//       <button className="google-signin">Sign in with Google</button>
//       <div className="divider">
//         <span><img src={line} alt="" />or<img src={line} alt="" /></span>
//       </div>

//       <form onSubmit={handleSubmit} className="signup-form">
//         {!isLogin && ( // 🚀 Показываем имя только при регистрации
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your first name"
//             value={formData.name}
//             onChange={handleChange}
//             required={!isLogin}
//           />
//         )}

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder={isLogin ? "Enter your password" : "Create a password"}
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
//             {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//           </div>
//         </div>

//         {!isLogin && ( // 🚀 Подтверждение пароля только при регистрации
//           <div className="password-field">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//             <div type="button" onClick={toggleConfirmPasswordVisibility} className="toggle-password">
//               {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//             </div>
//           </div>
//         )}

//         <button type="submit">{isLogin ? "Log In" : "Create an account"}</button>
//       </form>

//       <p className="login-link">
//         {isLogin ? "Don't have an account?" : "Already have an account?"} 
//         <button onClick={toggleForm} className="toggle-link">
//           {isLogin ? "Sign Up" : "Log In"}
//         </button>
//       </p>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; 
// import useAuthStore from "../store/authStore";
// import "./SignUp.css";
// import line from "../components/assets/line_sign.svg";

// const SignUp = () => {
//   const navigate = useNavigate();
//   // const location = useLocation();
//   const login = useAuthStore((state) => state.login); 
//   // const { selectedSeats, totalPrice } = location.state || { selectedSeats: [], totalPrice: 0 };
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prev) => !prev);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//         alert("Passwords do not match!");
//         return;
//     }

//     const userData = { name: formData.name, email: formData.email };

//     login(userData); // Обновляем состояние в Zustand
//     console.log("User after login:", useAuthStore.getState().user); // Проверка

//     navigate("/"); // Перенаправляем пользователя
// };


//   return (
//     <div className="signup-container">
//       <button className="google-signin">Sign in with Google</button>
//       <div className="divider">
//         <span><img src={line} alt="" />or<img src={line} alt="" /></span>
//       </div>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your first name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
//             {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//           </div>
//         </div>
//         <div className="password-field">
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           <div type="button" onClick={toggleConfirmPasswordVisibility} className="toggle-password">
//             {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//           </div>
//         </div>
//         <button type="submit">Create an account</button>
//       </form>
//       <p className="login-link">Already have an account? <a href="!#">Log In</a></p>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate, Link } from "react-router-dom"; 
// import useAuthStore from "../store/authStore";
// import "./SignUp.css";
// import line from "../components/assets/line_sign.svg";

// const PasswordInput = ({ name, value, onChange, showPassword, togglePassword, error }) => (
//   <div className="password-field">
//     <input
//       type={showPassword ? "text" : "password"}
//       name={name}
//       placeholder={name === "password" ? "Create a password" : "Confirm your password"}
//       value={value}
//       onChange={onChange}
//       required
//     />
//     <div onClick={togglePassword} className="toggle-password">
//       {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//     </div>
//     {error && <p className="error-text">{error}</p>}
//   </div>
// );

// const SignUp = () => {
//   const navigate = useNavigate();
//   const { login, register } = useAuthStore();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validatePassword = (password) => {
//     if (password.length < 6) return "Password must be at least 6 characters.";
//     if (!/\d/.test(password)) return "Password must contain at least one number.";
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "password" || name === "confirmPassword") {
//       const errorMsg = validatePassword(value);
//       setErrors({ ...errors, [name]: errorMsg });

//       if (name === "confirmPassword" && value !== formData.password) {
//         setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match!" }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (errors.password || errors.confirmPassword) return;

//     const userData = {
//       name: formData.name,
//       email: formData.email,
//     };

//     register(userData); // Теперь сохраняем в Zustand
//     login(userData);
//     navigate("/");
//   };

//   const handleGoogleSignIn = () => {
//     console.log("Google Sign-In clicked");
//   };

//   return (
//     <div className="signup-container">
//       <button type="button" className="google-signin" onClick={handleGoogleSignIn}>
//         Sign in with Google
//       </button>
//       <div className="divider">
//         <span><img src={line} alt="" />or<img src={line} alt="" /></span>
//       </div>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your first name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <PasswordInput
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           showPassword={showPassword}
//           togglePassword={() => setShowPassword((prev) => !prev)}
//           error={errors.password}
//         />
//         <PasswordInput
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           showPassword={showConfirmPassword}
//           togglePassword={() => setShowConfirmPassword((prev) => !prev)}
//           error={errors.confirmPassword}
//         />
//         <button type="submit" disabled={!!errors.password || !!errors.confirmPassword}>
//           Create an account
//         </button>
//       </form>
//       <p className="login-link">Already have an account? <Link to="/login">Log In</Link></p>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate, Link } from "react-router-dom"; 
// import useAuthStore from "../store/authStore";
// import "./SignUp.css";
// import line from "../components/assets/line_sign.svg";

// const PasswordInput = ({ name, value, onChange, showPassword, togglePassword, error }) => (
//   <div className="password-field">
//     <input
//       type={showPassword ? "text" : "password"}
//       name={name}
//       placeholder={name === "password" ? "Create a password" : "Confirm your password"}
//       value={value}
//       onChange={onChange}
//       required
//     />
//     <div onClick={togglePassword} className="toggle-password">
//       {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//     </div>
//     {error && <p className="error-text">{error}</p>}
//   </div>
// );

// const SignUp = () => {
//   const navigate = useNavigate();
//   const login = useAuthStore((state) => state.login);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validatePassword = (password) => {
//     if (password.length < 6) return "Password must be at least 6 characters.";
//     if (!/\d/.test(password)) return "Password must contain at least one number.";
//     return "";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "password" || name === "confirmPassword") {
//       const errorMsg = validatePassword(value);
//       setErrors({ ...errors, [name]: errorMsg });

//       if (name === "confirmPassword" && value !== formData.password) {
//         setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match!" }));
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (errors.password || errors.confirmPassword) return;

//     const userData = { name: formData.name, email: formData.email };
//     login(userData);
//     navigate("/");
//   };

//   const handleGoogleSignIn = () => {
//     console.log("Google Sign-In clicked");
//   };

//   return (
//     <div className="signup-container">
//       <button type="button" className="google-signin" onClick={handleGoogleSignIn}>
//         Sign in with Google
//       </button>
//       <div className="divider">
//         <span><img src={line} alt="" />or<img src={line} alt="" /></span>
//       </div>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your first name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <PasswordInput
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           showPassword={showPassword}
//           togglePassword={() => setShowPassword((prev) => !prev)}
//           error={errors.password}
//         />
//         <PasswordInput
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           showPassword={showConfirmPassword}
//           togglePassword={() => setShowConfirmPassword((prev) => !prev)}
//           error={errors.confirmPassword}
//         />
//         <button type="submit" disabled={!!errors.password || !!errors.confirmPassword}>
//           Create an account
//         </button>
//       </form>
//       <p className="login-link">Already have an account? <Link to="/login">Log In</Link></p>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; 
// import useAuthStore from "../store/authStore";
// import "./SignUp.css";
// import line from "../components/assets/line_sign.svg";

// const SignUp = () => {
//   const navigate = useNavigate();
//   // const location = useLocation();
//   const login = useAuthStore((state) => state.login); 
//   // const { selectedSeats, totalPrice } = location.state || { selectedSeats: [], totalPrice: 0 };
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prev) => !prev);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Пример простой проверки пароля
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const userData = { name: formData.name, email: formData.email };
//     login(userData); // Записываем пользователя в Zustand

//     navigate("/"); // Перенаправляем на страницу аккаунта

//     // // Перенаправление на другую страницу (например, "/dashboard")
//     // navigate("/checkout", { state: { selectedSeats, totalPrice } });
//   };

//   return (
//     <div className="signup-container">
//       <button className="google-signin">Sign in with Google</button>
//       <div className="divider">
//         <span><img src={line} alt="" />or<img src={line} alt="" /></span>
//       </div>
//       <form onSubmit={handleSubmit} className="signup-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter your first name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <div className="password-field">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <div type="button" onClick={togglePasswordVisibility} className="toggle-password">
//             {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//           </div>
//         </div>
//         <div className="password-field">
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           <div type="button" onClick={toggleConfirmPasswordVisibility} className="toggle-password">
//             {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
//           </div>
//         </div>
//         <button type="submit">Create an account</button>
//       </form>
//       <p className="login-link">Already have an account? <a href="!#">Log In</a></p>
//     </div>
//   );
// };

// export default SignUp;