import React, { useState } from "react";
import "./Section.css";
import news1 from "../assets/news_1.png";
import news2 from "../assets/news_2.png";
import news3 from "../assets/news_3.png";
import scroll from "../assets/scroll.png";
import tour1 from "../assets/tour_1.png";
import tour2 from "../assets/tour_2.png";
import tour3 from "../assets/tour_3.png";
import up_arrow from "../assets/right-small-up.svg";
import right from "../assets/arrow_white.svg";
import post from "../assets/post.svg";



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

function Section() {
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


    // Состояния для хранения email и ошибок
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Функция для обработки отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();

        // Проверка, что email не пустой
        if (!email) {
            setError('Email is required');
            setTimeout(() => setError(''), 3000); // Ошибка исчезает через 3 секунды
            return;
        }

        // Проверка на правильность формата email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            setTimeout(() => setError(''), 3000); // Ошибка исчезает через 3 секунды
            return;
        }

        // Если все проверки пройдены, очистить ошибку и отправить форму
        setError('');
        console.log('Form submitted with email:', email);
    };

    // Функция для обновления значения email в поле ввода
    const handleChange = (event) => {
        setEmail(event.target.value);
        setError(''); // Сбрасываем ошибку, когда пользователь что-то вводит
    };


    return (
        <div className="section__1">
            <div className="review_header">
                    <h2 className="main__header">Upcoming Concerts</h2>
                    <p className="main__describe">
                        The best concerts will be held soon!
                    </p>
                </div>
            <div className="slider-container__1">
                <div className="slide_btn_1">
                    <button className="prev-btn__1" onClick={goToPreviousSlide}>{"<"}</button>
                    <button className="next-btn__1" onClick={goToNextSlide}>{">"}</button>
                </div>
                <div className="concert-cards__1">
                    {currentConcerts.map((concert, index) => {
                        const image = imageContext(`./${concert.imageName}`);
                        return (
                            <div className="concert-card__1" key={index}>
                                <img className="img-card__1" src={image} alt={concert.name} />
                                <div className="time-out_1">
                                    <h3>Coming soon</h3>
                                    <p>14 September 2024</p>
                                </div>
                                <div className="shadow__1">
                                    <h3>{concert.name}</h3>
                                    <div className="row__loc__1">
                                        <p>{concert.location}</p>
                                        <p>{concert.date}</p>
                                    </div>
                                    <button>View Details</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="news">
                <div className="news_section">
                    <div className="news_title">
                        <h4>Subscribe our news letter</h4>
                        <p>For weekly later news and offers about music world, Join us here.</p>
                        <form onSubmit={handleSubmit}>
                            <img className="post__" src={post} alt="" />
                            <input
                                className="input__email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleChange}
                            />
                            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Показ ошибок */}
                            <button className="sub_btn" type="submit">Subscribe
                                <img src={right} alt="" />
                            </button>
                        </form>
                    </div>
                    <div className="news_title">
                        <img src={tour1} alt="" />
                        <h4>Taylor Swift in Biggest World Tour</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. A vivamus
                            donec bibendum massa erat the ultrices nulla. Velit euismod gravida...
                        </p>
                        <div className="news_writer">
                            <img src={news1} alt="" />
                            <div className="writer_describe">
                                <h5>Jonathan Wills </h5>
                                <p>July 17, 2024. 5 min</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_title">
                        <img src={tour2} alt="" />
                        <h4>Royal Albert Hall New Events</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...</p>
                        <div className="news_writer">
                            <img src={news2} alt="" />
                            <div className="writer_describe">
                                <h5>Marian Ed</h5>
                                <p>June 13, 2024. 10 min</p>
                            </div>
                        </div>
                    </div>
                    <div className="news_title">
                        <img src={tour3} alt="" />
                        <h4>Yanni Will Be in London </h4>
                        <p>Lorem ipsum dolor sit amet consectetur. A vivamus donec bibendum massa erat the ultrices nulla. Velit euismod gravida...</p>
                        <div className="news_writer">
                            <img src={news3} alt="" />
                            <div className="writer_describe">
                                <h5>Jack Nikelson</h5>
                                <p>May 08, 2024. 7 min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all_news">
                    <img src={scroll} alt="" />
                    <button className="view__btn">All News
                        <img src={up_arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section;