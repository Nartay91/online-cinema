import React, { useState } from "react";
import "./Concerts.css";
import down from "../components/assets/down-arrow.svg";
import timer from "../components/assets/timer.svg";

const imageContext = require.context("../components/assets", false, /\.(jpg|jpeg|png|gif)$/);

const concerts = [
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
  { name: "Adele", location: "Manchester", date: "Dec 02-06", price: "$899.99", imageName: "adelle.png" },
]

const ConcertSlider = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [sortedBy, setSortedBy] = useState("name");
  const [visibleRows, setVisibleRows] = useState(2);
  const itemsPerRow = 4;
  const totalVisible = visibleRows * itemsPerRow;

  const parseDate = (dateString) => {
    const parts = dateString.split(".");
    if (parts.length === 3) {
      return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    }
    return new Date(dateString);
  };

  const isDateInRange = (concertDate, selectedDate) => {
    if (!selectedDate) return true;
    const concertParsedDate = parseDate(concertDate);
    const selectedParsedDate = new Date(selectedDate);
    return concertParsedDate.toDateString() === selectedParsedDate.toDateString();
  };


  const filteredConcerts = concerts
    .filter((concert) =>
      concert.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      isDateInRange(concert.date, selectedDate) &&
      (selectedLocation !== "Location" ? concert.location === selectedLocation : true)
    )
    .sort((a, b) => (sortedBy === "price" ? a.price - b.price : a.name.localeCompare(b.name)));


  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;

  const totalSlides = Math.ceil(concerts.length / itemsPerPage);
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
  const currentConcerts = concerts.slice(currentSlide * itemsPerPage, (currentSlide + 1) * itemsPerPage);
  return (
    <div className="slider-container__11">
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
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option>Location</option>
          <option>Manchester</option>
          <option>London</option>
          <option>Bristol</option>
        </select>
        <select className="sort_concert" value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="name">Sorted by Name</option>
          <option value="price">Sorted by Price</option>
        </select>
      </div>

      {filteredConcerts.length === 0 && <p className="message">No tickets found.</p>}
      <div className="chapter-concert">
        <h1 className="our_benefit">Concerts</h1>
        <p className="promise">You can see all available concerts here</p>
      </div>
      <div className="concert-cards__11" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {filteredConcerts.slice(0, totalVisible).map((concert, index) => {
          const image = imageContext(`./${concert.imageName}`);
          return (
            <div className="concert-card__1" key={index}>
              <img className="img-card__1" src={image} alt={concert.name} />
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
        <div className="load_btn">
          {totalVisible < filteredConcerts.length && (
            <button className="load-more__1" onClick={() => setVisibleRows(visibleRows + 1)}>
              View More Concerts <img src={down} alt="arrow" />
            </button>
          )}
        </div>
      </div>
      <div className="review_header">
        <h2 className="main__header">This week</h2>
        <p className="main__describe">
        check out concerts that will hold in the next week
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
    </div>
  );
};

export default ConcertSlider;