import React, { useState } from "react";
import "./Concerts.css";
import down from "../components/assets/down-arrow.svg";

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

const Singers = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleRows, setVisibleRows] = useState(4);
    const itemsPerRow = 4;
    const totalVisible = visibleRows * itemsPerRow;
  
    const filteredConcerts = concerts.filter((concert) =>
      concert.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="slider-container__11">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type a singer name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {filteredConcerts.length === 0 && <p className="message">No tickets found.</p>}
  
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
    </div>
  );
};
 
export default Singers;