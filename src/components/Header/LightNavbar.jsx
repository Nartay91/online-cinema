import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from "/reacts/my-app/src/store/authStore";
import "./Header.css";
import ticket from "../assets/ticket-black.svg";
import shopping from "../assets/shopping-black.svg";
import logo from "../assets/Logo-black.svg";
import person from "../assets/Vector-person.svg";

const LightNavbar = () => {
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
        <div className="headers__">
            <header className="header_light">
                <nav>
                    <ul>
                        <li><Link className='light_navbar' to="/">Home</Link></li>
                        <li><Link className='light_navbar' to="/concerts">Concerts</Link></li>
                        <li><Link className='light_navbar' to="/singers">Singers</Link></li>
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
                            <button className="login-btn-light">
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
                        <button className="login-btn-light">
                            <Link className="white" to="/signup">
                                <img className='person-signin' src={person} alt="person" />
                                Login/Register
                            </Link>
                        </button>
                    )}
                </div>
            </header>
        </div>
    )
}

export default LightNavbar;