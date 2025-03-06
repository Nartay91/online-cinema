import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import DarkNavBar from "./DarkNavBar";
import LightNavbar from "./LightNavbar";


function Header() {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/" ? <DarkNavBar /> : <LightNavbar />}
        </>
    );
}

export default Header;