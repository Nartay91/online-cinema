import React, { useState } from "react";
import "./Info.css";
import pay from "/reacts/my-app/src/components/assets/payment.png";
import booking from "../assets/booking.svg";
import ticket from "../assets/tickets_refunc.svg";
import cheap from "../assets/cheapest.svg";
import timer from "../assets/timer.svg";
import snake from "../assets/snake.svg";
import right from "../assets/arrow_white.svg";


const imageContext = require.context("../assets", false, /\.(jpg|jpeg|png|gif)$/);

const concert = [
    { name: "Omarion", location: "Manchester", date: "Oct 25-27", price: "$279.99", imageName: "omarion.png" },
    { name: "Pitbull", location: "Bristol", date: "Oct 23-24-2024", price: "$499.99", imageName: "pitbull.png" },
    { name: "Pitbull", location: "Manchester", date: "Oct 24-25", price: "$399.99", imageName: "pitbull_1.png" },
    { name: "Rihanna", location: "London", date: "Oct 28-30", price: "$999.99", imageName: "rihanna.png" },
    { name: "Shakira", location: "Bristol", date: "05.03.2024", price: "$899.99", imageName: "shakira.png" },
    { name: "Shakira", location: "London", date: "Dec 01-05", price: "$99.99", imageName: "shakira_1.png" },
    { name: "Windy Soe", location: "Manchester", date: "Oct 25-27", price: "$279.99", imageName: "windy.png" },
    { name: "Olivia Rodrigo", location: "Manchester", date: "Oct 25-27", price: "$279.99", imageName: "olivia_2.png" },
    { name: "Olivia Rodrigo", location: "Bristol", date: "Oct 23-24-2024", price: "$499.99", imageName: "olivia.png" },
    { name: "Nikki Minaj", location: "Manchester", date: "Oct 24-25", price: "$399.99", imageName: "niki.png" },
    { name: "Lady Gaga", location: "London", date: "Oct 28-30", price: "$999.99", imageName: "gaga.png" },
    { name: "Ed Shareen", location: "Bristol", date: "05.03.2024", price: "$899.99", imageName: "ed.png" },
    { name: "Dua Lipa", location: "London", date: "Dec 01-05", price: "$99.99", imageName: "dua.png" },
    { name: "Zayn Malik", location: "Manchester", date: "Oct 25-27", price: "$579.99", imageName: "zayn.png" },
    { name: "Enrique Iglesias", location: "Bristol", date: "Oct 25-27", price: "$279.99", imageName: "enrique.png" },
    { name: "Taylor Swift", location: "Bristol", date: "Oct 23-24-2024", price: "$499.99", imageName: "taylor.png" },
    { name: "Bruno Mars", location: "Manchester", date: "Oct 24-25", price: "$399.99", imageName: "bruno.png" },
    { name: "Billi Ailish", location: "Bristol", date: "Oct 28-30", price: "$999.99", imageName: "billi.png" },
    { name: "Adriana Grande", location: "Bristol", date: "05.03.2024", price: "$899.99", imageName: "Adriana Grande.png" },
    { name: "Adele", location: "London", date: "Dec 01-05", price: "$99.99", imageName: "adelle.png" },
    { name: "Enrique Iglesias", location: "London", date: "Oct 23-24", price: "$929.99", imageName: "enrique_2.png" },
    { name: "Taylor Swift", location: "Manchester", date: "Oct 23-24-2024", price: "$799.99", imageName: "taylor_c.png" },
    { name: "Beyonce", location: "Manchester", date: "Oct 24-25", price: "$399.99", imageName: "beyonce.png" },
    { name: "Celen Dion", location: "Manchester", date: "Oct 28-30", price: "$599.99", imageName: "celen.png" },
    { name: "Adriana Grande", location: "London", date: "01.02.2024", price: "$199.99", imageName: "adriana.png" },
    { name: "Adele", location: "Manchester", date: "Dec 02-06", price: "$899.99", imageName: "adele.png" },
]

function Info() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 4;

    const totalSlides = Math.ceil(concert.length / itemsPerPage);
    const goToNextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    // Функция для перехода к предыдущему слайду
    const goToPreviousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Текущие концерты для отображения на слайде
    const currentConcerts = concert.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);


    return (
        <div className="benefits">
            <div className="benefit">
                <div>
                    <h1 className="our_benefit">Our Benefits</h1>
                    <p className="promise">we promise users with the standard of these 4 services</p>
                </div>
                <div className="ways">
                    <div className="services_of">
                        <img src={pay} alt="" />
                        <h2 className="service_main">Instalment Payment!</h2>
                        <p className="service_describe">
                            You can pay a ticket in 2
                            portions throughout a fixed
                            period of time. Start invoicing for free.
                        </p>
                    </div>
                    <div className="services_of">
                        <img src={booking} alt="" />
                        <h2 className="service_main">Online Booking!</h2>
                        <p className="service_describe">
                            You can pay a ticket in 2 portions
                            throughout a fixed period of time.
                            Start invoicing for free.
                        </p>
                    </div>
                    <div className="services_of">
                        <img src={ticket} alt="" />
                        <h2 className="service_main">Refundable Tickets!</h2>
                        <p className="service_describe">
                            You can pay a ticket in 2 portions
                            throughout a fixed period of time.
                            Start invoicing for free.
                        </p>
                    </div>
                    <div className="services_of">
                        <img src={cheap} alt="" />
                        <h2 className="service_main">Cheapest Tickets!</h2>
                        <p className="service_describe">
                            You can pay a ticket in 2 portions
                            throughout a fixed period of time.
                            Start invoicing for free.
                        </p>
                    </div>
                </div>
            </div>
            <div className="review_header">
                    <h2 className="main__header">Time is Running Out!</h2>
                    <p className="main__describe">
                        Explore nearby concerts and events here.
                    </p>
                </div>
            <div className="slider-container__">
                <div className="slide_btn">
                    <button className="prev-btn__" onClick={goToPreviousSlide}>{"<"}</button>
                    <button className="next-btn__" onClick={goToNextSlide}>{">"}</button>
                </div>
                <div className="concert-cards__">
                    {currentConcerts.map((concert, index) => {
                        const image = imageContext(`./${concert.imageName}`);
                        return (
                            <div className="concert-card__" key={index}>
                                <img className="img-card__" src={image} alt={concert.name} />
                                <div className="time-out">
                                    <div className="time__out">
                                        <img src={timer} alt="" />
                                        <p>Time to end</p>
                                    </div>
                                    <p>12D, 05:45:09</p>
                                </div>
                                <div className="shadow__">
                                    <h3>{concert.name}</h3>
                                    <div className="row__loc__">
                                        <p>{concert.location}</p>
                                        <p>{concert.date}</p>
                                    </div>
                                    <p>{concert.price}</p>
                                    <button>Book Now</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
                <div className="ways__">
                    <img src={snake} className="snakes" alt="" />
                    <div className="header_service">
                        <h1 className="our_benefit__">4 Easy Steps To Buy a Ticket!</h1>
                        <p className="promise">
                        Get Familiar with our 4 easy working process
                        </p>
                        <button className="buy_btn">Buy Ticket
                            <img src={right} alt="" />
                        </button>
                    </div>
                    <div className="services_of__">
                        <img src={pay} alt="" />
                        <h2 className="service_main__">Choose A Concert</h2>
                        <p className="service_describe">
                            You can pay a ticket in 2
                            portions throughout a fixed
                            period of time. Start invoicing for free.
                        </p>
                    </div>
                    <div className="services_of__">
                        <img src={booking} alt="" />
                        <h2 className="service_main__">Choose Date & Time</h2>
                        <p className="service_describe">
                        You Can check date and time of your favorite concert in our website
                        </p>
                    </div>
                    <div className="services_of__">
                        <img src={ticket} alt="" />
                        <h2 className="service_main__">Pay Your Bill</h2>
                        <p className="service_describe">
                        After choosing your date and time and your preferred seat you can pay ticket online
                        </p>
                    </div>
                    <div className="services_of__">
                        <img src={cheap} alt="" />
                        <h2 className="service_main__">Download Your Ticket!</h2>
                        <p className="service_describe">
                        After completing checkout process you can download your ticket and get ready for concert.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Info;