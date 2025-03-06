import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useAuthStore from "/reacts/my-app/src/store/authStore";
import "./Header.css"
import ticket from "../assets/tickets-two-white.svg";
import shopping from "../assets/shopping.svg";
import logo from "../assets/Logo-white.svg";
import person from "../assets/user-btn.svg";

function DarkNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(useAuthStore.getState().user); 
    const logout = useAuthStore((state) => state.logout);
    

    useEffect(() => {
        const unsubscribe = useAuthStore.subscribe((state) => {
            setUser(state.user); 
        });
        return () => unsubscribe(); 
    }, []);

    return (
        <header className="header dark">
            <div className="dark">
                <nav>
                    <ul className="darkNavBar">
                        <li><Link className="white" to="/">Home</Link></li>
                        <li><Link className="white" to="/concerts">Concerts</Link></li>
                        <li><Link className="white" to="/singers">Singers</Link></li>
                    </ul>
                </nav>
                <div className="logo1">
                    <img src={ticket} alt="" />
                    <img src={logo} alt="" />
                </div>
                <div className="action">
                    <div className="basket">
                        <Link to="/basket">
                            <img src={shopping} alt="" />
                        </Link>
                    </div>
                    {user ? ( 
                        <div 
                            className="dropdown" 
                            onMouseEnter={() => setIsOpen(true)} 
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <button className="login-btn">
                                <img src={person} alt="person" /> My Account
                            </button>
                            {isOpen && (
                                <div className="dropdown-content">
                                    <Link className="account__hub" to="/account">My Hub</Link>
                                    <Link className="account__hub" to="/settings">Settings</Link>
                                    <button onClick={logout} className="logout-btn">Sign Out</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className="login-btn">
                            <Link  to="/signup">
                                <img className="person-signin" src={person} alt="person" />
                                Login/Register
                            </Link>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default DarkNavBar; 


// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import useAuthStore from "/reacts/my-app/src/store/authStore";
// import "./Header.css"
// import ticket from "../assets/tickets-two-white.svg";
// import shopping from "../assets/shopping.svg";
// import logo from "../assets/Logo-white.svg";
// import person from "../assets/user-btn.svg";

// function DarkNavBar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const user = useState(useAuthStore.getState().user); // Локальное состояние
//     const logout = useAuthStore((state) => state.logout); 

//     // Проверка, загружены ли данные из persist
//     useEffect(() => {
//         console.log("USER:", user);
//     }, [user]);

//     return (
//         <header className="header dark">
//             <div className="dark">
//                 <nav>
//                     <ul className="darkNavBar">
//                         <li><Link className="white" to="/">Home</Link></li>
//                         <li><Link className="white" to="/concerts">Concerts</Link></li>
//                         <li><Link className="white" to="/singers">Singers</Link></li>
//                     </ul>
//                 </nav>
//                 <div className="logo1">
//                     <img src={ticket} alt="" />
//                     <img src={logo} alt="" />
//                 </div>
//                 <div className="action">
//                     <div className="basket">
//                         <Link to="/basket">
//                             <img src={shopping} alt="" />
//                         </Link>
//                     </div>
//                     {user ? ( 
//                         <div 
//                             className="dropdown" 
//                             onMouseEnter={() => setIsOpen(true)} 
//                             onMouseLeave={() => setIsOpen(false)}
//                         >
//                             <button className="login-btn">
//                                 <img src={person} alt="person" /> My Account
//                             </button>
//                             {isOpen && (
//                                 <div className="dropdown-content">
//                                     <Link className="account__hub" to="/account">My Hub</Link>
//                                     <Link className="account__hub" to="/settings">Settings</Link>
//                                     <button onClick={logout} className="logout-btn">Sign Out</button>
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         <button className="login-btn">
//                             <Link to="/signup">
//                                 <img src={person} alt="person" />
//                                 Login/Register
//                             </Link>
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default DarkNavBar;



// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import useAuthStore from "/reacts/my-app/src/store/authStore";
// import "./Header.css"
// import ticket from "../assets/tickets-two-white.svg";
// import shopping from "../assets/shopping.svg";
// import logo from "../assets/Logo-white.svg";
// import person from "../assets/Vector-person.svg";

// function DarkNavBar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [user, setUser] = useState(useAuthStore.getState().user); // Локальное состояние
//     const logout = useAuthStore((state) => state.logout);    

//     // Следим за изменением `user`
//     useEffect(() => {
//         const unsubscribe = useAuthStore.subscribe((state) => {
//             setUser(state.user); // Обновляем локальный стейт
//         });
//         return () => unsubscribe(); // Отписываемся при размонтировании
//     }, []);

//     return (
//         <header className="header dark">
//             <div className="dark">
//             <nav>
//                 <ul className="darkNavBar">
//                     <li><Link className="white" to="/">Home</Link></li>
//                     <li><Link className="white"  to="/concerts">Concerts</Link></li>
//                     <li><Link className="white"  to="/singers">Singers</Link></li>
//                 </ul>
//             </nav>
//             <div className="logo1">
//                 <img src={ticket} alt="" />
//                 <img src={logo} alt="" />
//             </div>
//             <div className="action">
//                 <div className="basket">
//                     <Link to="/basket">
//                         <img src={shopping} alt="" />
//                     </Link>
//                 </div>
//                 {user ? ( 
//                     <div className="dropdown">
//                         <button className="login-btn" onClick={() => setIsOpen(!isOpen)}>
//                             <img src={person} alt="person" /> My Account
//                         </button>
//                         {isOpen && (
//                             <div className="dropdown-content">
//                                 <Link className="account__hub" to="/account">My Hub</Link>
//                                 <Link className="account__hub" to="/settings">Settings</Link>
//                                 <button onClick={logout} className="logout-btn">Sign Out</button>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <button className="login-btn">
//                         <Link to="/signup">
//                             <img src={person} alt="person" />
//                             Login / Register
//                         </Link>
//                     </button>
//                 )}
//             </div>
//             </div>
//         </header>
//     );
// }

// export default DarkNavBar;


// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import useAuthStore from "/reacts/my-app/src/store/authStore";
// import "./Header.css"
// import ticket from "../assets/tickets-two-white.svg";
// import shopping from "../assets/shopping.svg";
// import logo from "../assets/Logo-white.svg";
// import person from "../assets/Vector-person.svg";

// function DarkNavBar() {
//     // const { user, logout } = useAuthStore(); // Добавляем `loadUser`
//     const [isOpen, setIsOpen] = useState(false);
//     const user = useAuthStore((state) => state.user);
//     const logout = useAuthStore((state) => state.logout);    

//     return (
//         <header className="header">
//             <nav>
//                 <ul className="darkNavBar">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/concerts">Concerts</Link></li>
//                     <li><Link to="/singers">Singers</Link></li>
//                 </ul>
//             </nav>
//             <div className="logo1">
//                 <img src={ticket} alt="" />
//                 <img src={logo} alt="" />
//             </div>
//             <div className="action">
//                 <div className="basket">
//                     <Link to="/basket">
//                         <img src={shopping} alt="" />
//                     </Link>
//                 </div>
//                 {user ? ( 
//                     <div className="dropdown">
//                         <button className="login-btn" onClick={() => setIsOpen(!isOpen)}>
//                             <img src={person} alt="person" /> My Account
//                         </button>
//                         {isOpen && (
//                             <div className="dropdown-content">
//                                 <Link to="/account">My Hub</Link>
//                                 <Link to="/settings">Settings</Link>
//                                 <button onClick={logout} className="logout-btn">Sign Out</button>
//                             </div>
//                         )}
//                     </div>
//                 ) : (
//                     <button className="login-btn">
//                         <Link to="/signup">
//                             <img src={person} alt="person" />
//                             Login / Register
//                         </Link>
//                     </button>
//                 )}
//             </div>
//         </header>
//     );
// }

// export default DarkNavBar;