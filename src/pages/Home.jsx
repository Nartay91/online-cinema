import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Info from "../components/piece/Info";
import Section from "../components/piece/Section";
import SectionTwo from "../components/piece/SectionTwo";

// Dynamically import images from the assets folder
const imageContext = require.context("../components/assets", false, /\.(jpg|jpeg|png|gif)$/);


const concerts = [
  { name: "Enrique Iglesias", location: "Manchester", date: "Oct 23-24", price: "$229.99", imageName: "Enrique_s.png" },
  { name: "Taylor Swift", location: "London", date: "Oct 23-24-2024", price: "$199.99", imageName: "Taylor_s.png" },
  { name: "Justin Bieber", location: "Manchester", date: "Oct 24-25", price: "$199.99", imageName: "Justin_s.png" },
  { name: "Celen Dion", location: "Bristol", date: "Oct 28-30", price: "$499.99", imageName: "Selin_s.png" },
  { name: "Enrique Iglesias", location: "Manchester", date: "Oct 23-24", price: "$229.99", imageName: "Enrique_s.png" },
  { name: "Taylor Swift", location: "London", date: "Oct 23-24-2024", price: "$199.99", imageName: "Taylor_s.png" },
  { name: "Justin Bieber", location: "Manchester", date: "Oct 24-25", price: "$199.99", imageName: "Justin_s.png" },
  { name: "Selena Gomez", location: "London", date: "01.02.2024", price: "$299.99", imageName: "Selena_s.png" },
  { name: "Selena Gomez", location: "Manchester", date: "Dec 01-05", price: "$499.99", imageName: "Selene2_s.png" },
  { name: "Enrique Iglesias", location: "Manchester", date: "Oct 23-24", price: "$229.99", imageName: "Enrique_s.png" },
  { name: "Taylor Swift", location: "London", date: "Oct 23-24-2024", price: "$199.99", imageName: "Taylor_s.png" },
  { name: "Enrique Iglesias", location: "Manchester", date: "Oct 23-24", price: "$229.99", imageName: "Enrique_s.png" },
  { name: "Taylor Swift", location: "London", date: "Oct 23-24-2024", price: "$199.99", imageName: "Taylor_s.png" },
  { name: "Justin Bieber", location: "Manchester", date: "Oct 24-25", price: "$199.99", imageName: "Justin_s.png" },
  { name: "Justin Bieber", location: "Manchester", date: "Oct 24-25", price: "$199.99", imageName: "Justin_s.png" },
  { name: "Celen Dion", location: "Bristol", date: "Oct 28-30", price: "$499.99", imageName: "Selin_s.png" },
  { name: "Selena Gomez", location: "London", date: "01.02.2024", price: "$299.99", imageName: "Selena_s.png" },
  { name: "Selena Gomez", location: "Manchester", date: "Dec 01-05", price: "$499.99", imageName: "Selene2_s.png" },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [message, setMessage] = useState("");
  const [filteredConcerts, setFilteredConcerts] = useState(concerts); // Изначально показываем все концерты

  // Функция для преобразования строки даты в объект Date
  const parseDate = (dateString) => {
    const [start, end] = dateString.split("-");
    const [startDay, startMonth, startYear] = start.split(".");
    const startDate = new Date(`${startYear}-${startMonth}-${startDay}`);
  
    if (!end) return { startDate, endDate: startDate }; // Если конца диапазона нет, считаем это одной датой
  
    const [endDay, endMonth, endYear] = end.split(".");
    const endDate = new Date(`${endYear}-${endMonth}-${endDay}`);
  
    return { startDate, endDate };
  };

  const isDateInRange = (concertDate, selectedDate) => {
    if (!selectedDate) return true; // Если дата не выбрана, показываем все
  
    const { startDate, endDate } = parseDate(concertDate);
    const selected = new Date(selectedDate);
  
    return selected >= startDate && selected <= endDate;
  };

  const filterConcerts = () => {
    const filtered = concerts.filter((concert) => {
      return (
        concert.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        isDateInRange(concert.date, selectedDate) &&
        (selectedLocation !== "Location" ? concert.location === selectedLocation : true)
      );
    });
  
    setFilteredConcerts(filtered);
  
    // Показываем сообщение, если билеты не найдены
    setMessage(filtered.length === 0 ? "No tickets found for the selected filters." : "");
  };

  const itemsPerPage = 5;
  const totalSlides = Math.ceil(filteredConcerts.length / itemsPerPage);

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentConcerts = filteredConcerts.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);

  return (
    <div>
      <div className="concert-slider">
        <div className="first_head">
          <h1>Book Tickets Of Your Favorite Singers!</h1>
          <p>Make Sure Don't Miss These 5 Upcoming Concerts!</p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type a singer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)} // Используем обработчик для даты
          />
          <select
            value={selectedLocation} // Установите selectedLocation как значение по умолчанию
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option>Location</option>
            <option>Manchester</option>
            <option>London</option>
            <option>Bristol</option>
          </select>
          <button onClick={filterConcerts}>Find Ticket</button>
        </div>

        {message && <p className="message">{message}</p>} {/* Показать сообщение, если билеты не найдены */}

        <div className="slider-container">
          <button className="prev-btn" onClick={goToPreviousSlide}>{"<"}</button>
          <div className="concert-cards">
            {currentConcerts.map((concert, index) => {
              const image = imageContext(`./${concert.imageName}`);
              return (
                <div className="concert-card" key={index}>
                  <img className="img-card" src={image} alt={concert.name} />
                  <div className="shadow">
                    <h3>{concert.name}</h3>
                    <div className="row__loc">
                      <p>{concert.location}</p>
                      <p>{concert.date}</p>
                    </div>
                    <p>{concert.price}</p>
                    <Link to={`/concert/${concert.name}`} className="book___btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="next-btn" onClick={goToNextSlide}>{">"}</button>
        </div>
      </div>
      < Info />
      < Section />
      < SectionTwo />
    </div>
  );
};

export default Home;

