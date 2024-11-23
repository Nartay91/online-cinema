import React from "react";
import logo from "./assets/main-pic.png"
import "./SelectTime.css"
import Seat from "./store/Seat";


function SelectTime() {
    return (
        <div className="select-page">
            <div className="step-bar">
                <div className="bar">
                    <div className="bars">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#242B35"/>
<path d="M11.1506 5.77273V14.5H9.82955V7.09375H9.77841L7.69034 8.45739V7.19602L9.8679 5.77273H11.1506Z" fill="#242B35"/>
</svg> 
<svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="2" rx="1" fill="#CECECE"/>
<rect width="24" height="2" rx="1" fill="#505050"/>
</svg>
                    </div>
                    <p className="choose-bar">Choose Time</p>
                </div>
                <div className="bar">
                    <div className="bars">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#242B35"/>
<path d="M6.83949 14.5V13.5455L9.79261 10.4858C10.108 10.1534 10.3679 9.86222 10.5724 9.61222C10.7798 9.35937 10.9347 9.11932 11.0369 8.89205C11.1392 8.66477 11.1903 8.4233 11.1903 8.16761C11.1903 7.87784 11.1222 7.62784 10.9858 7.41761C10.8494 7.20455 10.6634 7.04119 10.4276 6.92756C10.1918 6.81108 9.92614 6.75284 9.63068 6.75284C9.31818 6.75284 9.04545 6.81676 8.8125 6.9446C8.57955 7.07244 8.40057 7.25284 8.27557 7.4858C8.15057 7.71875 8.08807 7.99148 8.08807 8.30398H6.83097C6.83097 7.77273 6.95313 7.30824 7.19744 6.91051C7.44176 6.51278 7.77699 6.20455 8.20312 5.9858C8.62926 5.7642 9.11364 5.65341 9.65625 5.65341C10.2045 5.65341 10.6875 5.76278 11.1051 5.98153C11.5256 6.19744 11.8537 6.4929 12.0895 6.8679C12.3253 7.24006 12.4432 7.66051 12.4432 8.12926C12.4432 8.45312 12.3821 8.76989 12.2599 9.07955C12.1406 9.3892 11.9318 9.73437 11.6335 10.1151C11.3352 10.4929 10.9205 10.9517 10.3892 11.4915L8.65483 13.3068V13.3707H12.5838V14.5H6.83949Z" fill="#242B35"/>
</svg>
<svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="2" rx="1" fill="#CECECE"/>
</svg>
                    </div>
                    <p>Choose Seat</p>
                </div>
                <div className="bar">
                    <div className="bars">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#242B35"/>
<path d="M9.87784 14.6193C9.29261 14.6193 8.76989 14.5185 8.30966 14.3168C7.85227 14.1151 7.49006 13.8352 7.22301 13.4773C6.95881 13.1165 6.81676 12.6989 6.79688 12.2244H8.13494C8.15199 12.483 8.23864 12.7074 8.39489 12.8977C8.55398 13.0852 8.76136 13.2301 9.01705 13.3324C9.27273 13.4347 9.55682 13.4858 9.86932 13.4858C10.2131 13.4858 10.517 13.4261 10.7812 13.3068C11.0483 13.1875 11.2571 13.0213 11.4077 12.8082C11.5582 12.5923 11.6335 12.3438 11.6335 12.0625C11.6335 11.7699 11.5582 11.5128 11.4077 11.2912C11.2599 11.0668 11.0426 10.8906 10.7557 10.7628C10.4716 10.6349 10.1278 10.571 9.72443 10.571H8.98722V9.49716H9.72443C10.0483 9.49716 10.3324 9.43892 10.5767 9.32244C10.8239 9.20597 11.017 9.04403 11.1562 8.83665C11.2955 8.62642 11.3651 8.38068 11.3651 8.09943C11.3651 7.82955 11.304 7.59517 11.1818 7.39631C11.0625 7.1946 10.892 7.03693 10.6705 6.9233C10.4517 6.80966 10.1932 6.75284 9.89489 6.75284C9.6108 6.75284 9.34517 6.8054 9.09801 6.91051C8.85369 7.01278 8.65483 7.16051 8.50142 7.35369C8.34801 7.54403 8.26563 7.77273 8.25426 8.03977H6.98011C6.99432 7.56818 7.13352 7.15341 7.39773 6.79545C7.66477 6.4375 8.01705 6.15767 8.45455 5.95597C8.89205 5.75426 9.37784 5.65341 9.91193 5.65341C10.4716 5.65341 10.9545 5.76278 11.3608 5.98153C11.7699 6.19744 12.0852 6.4858 12.3068 6.84659C12.5313 7.20739 12.642 7.60227 12.6392 8.03125C12.642 8.51989 12.5057 8.93466 12.2301 9.27557C11.9574 9.61648 11.5938 9.84517 11.1392 9.96165V10.0298C11.7188 10.1179 12.1676 10.348 12.4858 10.7202C12.8068 11.0923 12.9659 11.554 12.9631 12.1051C12.9659 12.5852 12.8324 13.0156 12.5625 13.3963C12.2955 13.777 11.9304 14.0767 11.4673 14.2955C11.0043 14.5114 10.4744 14.6193 9.87784 14.6193Z" fill="#242B35"/>
</svg>
<svg width="100" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="2" rx="1" fill="#CECECE"/>
</svg>
                    </div>
                    <p>Checkout</p>
                </div>
                <div className="bar">
                    <div className="bars">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#242B35"/>
<path d="M6.65625 12.7955V11.7301L10.4276 5.77273H11.267V7.34091H10.7344L8.03693 11.6108V11.679H13.206V12.7955H6.65625ZM10.794 14.5V12.4716L10.8026 11.9858V5.77273H12.0511V14.5H10.794Z" fill="#242B35"/>
</svg>
                    </div>
                    <p>Get Ticket</p>
                </div>
            </div>
            <section className="select-concert">
            <h2>Taylor Swift Concert “The Eras Tour”</h2>
            <img src={logo} alt="main" className="logo" />
            <div className="info-tickets">
                <div className="tickets-date">
                    <h3 className="name-concert">The Eras Tour: Taylor Swift</h3>
                    <p className="tick-date">Mon, June 04 . 08:00 pm . Royal Albert Hall.</p>
                </div>
                <div className="tickets-price">
                    <p className="price-infoo">Ticket Price:</p>
                    <p className="price-info">$399 | VIP tickets</p>
                    <p className="price-info">$299 | Standard tickets</p>
                    <p className="price-info">$199 | Economic tickets</p>
                </div>
            </div>
            </section>
            <section className="section-seats">
                <Seat/>
            </section>
            {/* <section className="selected__seats">
              
            </section> */}
            
        </div>
    )
}

export default SelectTime;