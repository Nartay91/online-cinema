import React from "react";
import "./Choose-time.css";
import { Link } from 'react-router-dom';
import logo from "./assets/main-pic.png"


const concertDates = [
    { date: "03 June", day: "SUN", time: "08:00 PM", tickets: 20 },
    { date: "03 June", day: "SUN", time: "10:00 PM", tickets: 18 },
    { date: "04 June", day: "MON", time: "08:00 PM", tickets: 40 },
    { date: "04 June", day: "MON", time: "10:00 PM", tickets: 50 },
    { date: "05 June", day: "TUES", time: "08:00 PM", tickets: 76 },
    { date: "05 June", day: "TUES", time: "10:00 PM", tickets: 78 },
    { date: "06 June", day: "WED", time: "08:00 PM", tickets: 96 },
    { date: "06 June", day: "WED", time: "10:00 PM", tickets: 102 },
  ];

function Choose() {
    return (
        <div className="time-container">
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
            <section className="concert">
                <h2>Taylor Swift Concert “The Eras Tour”</h2>
                <img src={logo} alt="main" className="logo" />
                <div className="concert-info">
                    <div className="info-1">
                        <div className="info-date">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.70703C1.86193 1.70703 1.75 1.81896 1.75 1.95703V19.957C1.75 20.0951 1.86193 20.207 2 20.207H20C20.1381 20.207 20.25 20.0951 20.25 19.957V1.95703C20.25 1.81896 20.1381 1.70703 20 1.70703H2ZM0.25 1.95703C0.25 0.990533 1.0335 0.207031 2 0.207031H20C20.9665 0.207031 21.75 0.990533 21.75 1.95703V19.957C21.75 20.9235 20.9665 21.707 20 21.707H2C1.0335 21.707 0.25 20.9235 0.25 19.957V1.95703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 5.95703C0.25 5.54282 0.585786 5.20703 1 5.20703H21C21.4142 5.20703 21.75 5.54282 21.75 5.95703C21.75 6.37124 21.4142 6.70703 21 6.70703H1C0.585786 6.70703 0.25 6.37124 0.25 5.95703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 3.70703C1.41421 3.70703 1.75 4.04282 1.75 4.45703V10.457C1.75 10.8712 1.41421 11.207 1 11.207C0.585786 11.207 0.25 10.8712 0.25 10.457V4.45703C0.25 4.04282 0.585786 3.70703 1 3.70703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3.70703C21.4142 3.70703 21.75 4.04282 21.75 4.45703V10.457C21.75 10.8712 21.4142 11.207 21 11.207C20.5858 11.207 20.25 10.8712 20.25 10.457V4.45703C20.25 4.04282 20.5858 3.70703 21 3.70703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 9.95703C12.25 9.54282 12.5858 9.20703 13 9.20703H17C17.4142 9.20703 17.75 9.54282 17.75 9.95703V16.957C17.75 17.3712 17.4142 17.707 17 17.707H13C12.5858 17.707 12.25 17.3712 12.25 16.957V9.95703ZM13.75 10.707V16.207H16.25V10.707H13.75Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 9.95703C4.25 9.54282 4.58579 9.20703 5 9.20703H9C9.41421 9.20703 9.75 9.54282 9.75 9.95703V16.957C9.75 17.3712 9.41421 17.707 9 17.707H5C4.58579 17.707 4.25 17.3712 4.25 16.957C4.25 16.5428 4.58579 16.207 5 16.207H8.25V10.707H5C4.58579 10.707 4.25 10.3712 4.25 9.95703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 13.457C5.25 13.0428 5.58579 12.707 6 12.707H9C9.41421 12.707 9.75 13.0428 9.75 13.457C9.75 13.8712 9.41421 14.207 9 14.207H6C5.58579 14.207 5.25 13.8712 5.25 13.457Z" fill="#222222"/>
                        </svg>
                            <p className="info-p">Date: 3 June until 6 June, 2024</p>
                        </div>
                        <div className="info-time">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12.957C1.25 7.01997 6.06294 2.20703 12 2.20703C17.9371 2.20703 22.75 7.01997 22.75 12.957C22.75 18.8941 17.9371 23.707 12 23.707C6.06294 23.707 1.25 18.8941 1.25 12.957ZM12 3.70703C6.89136 3.70703 2.75 7.84839 2.75 12.957C2.75 18.0657 6.89136 22.207 12 22.207C17.1086 22.207 21.25 18.0657 21.25 12.957C21.25 7.84839 17.1086 3.70703 12 3.70703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0041 6.20703C12.4183 6.20707 12.7541 6.54289 12.754 6.95711L12.7534 12.6508L16.7734 16.6708C17.0663 16.9637 17.0663 17.4386 16.7734 17.7315C16.4806 18.0244 16.0057 18.0244 15.7128 17.7315L11.4731 13.4918C11.3324 13.3511 11.2534 13.1603 11.2534 12.9614L11.254 6.95696C11.2541 6.54274 11.5899 6.20699 12.0041 6.20703Z" fill="#222222"/>
                            </svg>
                            <p className="info-p">Time: 08:00 PM & 10:00 PM</p>
                        </div>
                    </div>
                    <div className="info-2">
                        <div className="info-location">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59578 3.32528C1.81123 3.18743 2.08207 3.16888 2.31429 3.27606L8.51129 6.13622L15.2046 3.26767C15.3998 3.18399 15.6214 3.18704 15.8143 3.27606L22.3143 6.27606C22.5799 6.39865 22.75 6.66449 22.75 6.95703V21.957C22.75 22.2128 22.6197 22.4509 22.4042 22.5888C22.1888 22.7266 21.9179 22.7452 21.6857 22.638L15.4887 19.7778L8.79544 22.6464C8.60018 22.7301 8.37859 22.727 8.18571 22.638L1.68571 19.638C1.42009 19.5154 1.25 19.2496 1.25 18.957V3.95703C1.25 3.70126 1.38034 3.46313 1.59578 3.32528ZM15.4887 4.77785L8.79544 7.64639C8.60018 7.73007 8.37859 7.72703 8.18571 7.638L2.75 5.12921V18.4772L8.51129 21.1362L15.2046 18.2677C15.3998 18.184 15.6214 18.187 15.8143 18.2761L21.25 20.7849V7.43691L15.4887 4.77785Z" fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 3.20703C15.9142 3.20703 16.25 3.54282 16.25 3.95703V18.957C16.25 19.3712 15.9142 19.707 15.5 19.707C15.0858 19.707 14.75 19.3712 14.75 18.957V3.95703C14.75 3.54282 15.0858 3.20703 15.5 3.20703Z" fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 6.20703C8.91421 6.20703 9.25 6.54282 9.25 6.95703V21.957C9.25 22.3712 8.91421 22.707 8.5 22.707C8.08579 22.707 7.75 22.3712 7.75 21.957V6.95703C7.75 6.54282 8.08579 6.20703 8.5 6.20703Z" fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2046 3.26767C15.3998 3.18399 15.6214 3.18704 15.8143 3.27606L19.0645 4.77606C19.4406 4.94964 19.6047 5.39524 19.4312 5.77132C19.2576 6.14741 18.812 6.31158 18.4359 6.138L15.4887 4.77785L8.79544 7.64639C8.60018 7.73007 8.37859 7.72703 8.18571 7.638L4.93589 6.138C4.5598 5.96442 4.39563 5.51883 4.56921 5.14274C4.74279 4.76665 5.18839 4.60248 5.56447 4.77606L8.51129 6.13622L15.2046 3.26767Z" fill="#222222"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2046 18.2677C15.3998 18.184 15.6214 18.187 15.8143 18.2761L19.0645 19.7761C19.4406 19.9496 19.6047 20.3952 19.4312 20.7713C19.2576 21.1474 18.812 21.3116 18.4359 21.138L15.4887 19.7778L8.79544 22.6464C8.60018 22.7301 8.37859 22.727 8.18571 22.638L4.93589 21.138C4.5598 20.9644 4.39563 20.5188 4.56921 20.1427C4.74279 19.7666 5.18839 19.6025 5.56447 19.7761L8.51129 21.1362L15.2046 18.2677Z" fill="#222222"/>
                        </svg>
                        <p className="info-p">Location: Royal Albert Hall, London</p>
                        </div>
                    
                        <Link to={'/SelectTime'} className="get-btn">
      Get Direction
      <svg
        width="9"
        height="10"
        viewBox="0 0 9 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.9598C0 4.68366 0.223858 4.4598 0.5 4.4598H8.5C8.77614 4.4598 9 4.68366 9 4.9598C9 5.23594 8.77614 5.4598 8.5 5.4598H0.5C0.223858 5.4598 0 5.23594 0 4.9598Z"
          fill="#3337BF"
        />
        <path
          d="M4.14645 0.603478C4.34171 0.408216 4.65829 0.408216 4.85355 0.603478L8.85355 4.60348C9.04882 4.79874 9.04882 5.11532 8.85355 5.31059L4.85355 9.31059C4.65829 9.50585 4.34171 9.50585 4.14645 9.31059C3.95118 9.11532 3.95118 8.79874 4.14645 8.60348L7.79289 4.95703L4.14645 1.31058C3.95118 1.11532 3.95118 0.79874 4.14645 0.603478Z"
          fill="#3337BF"
        />
      </svg>
    </Link>
      
                    </div>
                </div>
            </section>
            <section className="concert-dates">
                <div className="tickets-header">
                    <h2 className="tickets-head">Choose Date and Time</h2>
                    <p className="tickets-area">All Available Tickets Are Here.</p>
                </div>
                <div className="date-grid">
                    {concertDates.map((concert, index) => (
                        <div key={index} className="date-card">
                            <div className="date-info">
                                <div className="date">{concert.date}</div>
                                <div className="day">{concert.day}</div>
                                <div className="time">{concert.time}</div>
                            </div>
                            <div className="concert-details">
                                <div className="details">
                                <p className="taylor">Taylor Swift</p>
                                <p>The Eras Tour</p>
                                <p className="location-concert">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.59578 3.32528C1.81123 3.18743 2.08207 3.16888 2.31429 3.27606L8.51129 6.13622L15.2046 3.26767C15.3998 3.18399 15.6214 3.18704 15.8143 3.27606L22.3143 6.27606C22.5799 6.39865 22.75 6.66449 22.75 6.95703V21.957C22.75 22.2128 22.6197 22.4509 22.4042 22.5888C22.1888 22.7266 21.9179 22.7452 21.6857 22.638L15.4887 19.7778L8.79544 22.6464C8.60018 22.7301 8.37859 22.727 8.18571 22.638L1.68571 19.638C1.42009 19.5154 1.25 19.2496 1.25 18.957V3.95703C1.25 3.70126 1.38034 3.46313 1.59578 3.32528ZM15.4887 4.77785L8.79544 7.64639C8.60018 7.73007 8.37859 7.72703 8.18571 7.638L2.75 5.12921V18.4772L8.51129 21.1362L15.2046 18.2677C15.3998 18.184 15.6214 18.187 15.8143 18.2761L21.25 20.7849V7.43691L15.4887 4.77785Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 3.20703C15.9142 3.20703 16.25 3.54282 16.25 3.95703V18.957C16.25 19.3712 15.9142 19.707 15.5 19.707C15.0858 19.707 14.75 19.3712 14.75 18.957V3.95703C14.75 3.54282 15.0858 3.20703 15.5 3.20703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 6.20703C8.91421 6.20703 9.25 6.54282 9.25 6.95703V21.957C9.25 22.3712 8.91421 22.707 8.5 22.707C8.08579 22.707 7.75 22.3712 7.75 21.957V6.95703C7.75 6.54282 8.08579 6.20703 8.5 6.20703Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2046 3.26767C15.3998 3.18399 15.6214 3.18704 15.8143 3.27606L19.0645 4.77606C19.4406 4.94964 19.6047 5.39524 19.4312 5.77132C19.2576 6.14741 18.812 6.31158 18.4359 6.138L15.4887 4.77785L8.79544 7.64639C8.60018 7.73007 8.37859 7.72703 8.18571 7.638L4.93589 6.138C4.5598 5.96442 4.39563 5.51883 4.56921 5.14274C4.74279 4.76665 5.18839 4.60248 5.56447 4.77606L8.51129 6.13622L15.2046 3.26767Z" fill="#222222"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2046 18.2677C15.3998 18.184 15.6214 18.187 15.8143 18.2761L19.0645 19.7761C19.4406 19.9496 19.6047 20.3952 19.4312 20.7713C19.2576 21.1474 18.812 21.3116 18.4359 21.138L15.4887 19.7778L8.79544 22.6464C8.60018 22.7301 8.37859 22.727 8.18571 22.638L4.93589 21.138C4.5598 20.9644 4.39563 20.5188 4.56921 20.1427C4.74279 19.7666 5.18839 19.6025 5.56447 19.7761L8.51129 21.1362L15.2046 18.2677Z" fill="#222222"/>
</svg> 
                                    Royal Albert Hall
                                </p>
                                <p className="location-concert2">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.08268 5.91732V6.75065M6.08268 9.25065V10.084M9.41602 6.75065H13.9993M9.41602 9.25065H13.9993M0.666016 1.33398H3.58268C3.58268 1.33398 3.99935 3.41732 6.08268 3.41732C8.16602 3.41732 8.58268 1.33398 8.58268 1.33398H17.3327V14.6673H8.58268C8.58268 14.6673 8.16602 12.584 6.08268 12.584C3.99935 12.584 3.58268 14.6673 3.58268 14.6673H0.666016V1.33398Z" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                 {concert.tickets}Tickets Available
                                </p>
                                </div>
                                <div className="booking-area">
                                    <p>From 100$ / person</p>
                                    <button className="book-btn">Book Now</button>
                                </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Choose;
