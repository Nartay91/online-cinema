import React, { useState } from "react";
import AvailableSeat from "../assets/AvailableSeats.svg"; // Изображения для стульев
import ReservedSeat from "../assets/ReservedSeats.svg";
import SelectedSeat from "../assets/SelectedSeats.svg";
import useSeatsStore from "./seatsStore"; // импорт хранилища
import "../SelectTime.css"
import Selected_pic from "../assets/selected_pic.png";
import Seats_position from "../assets/seats-position.png";

const Seat = () => {
  // Состояние для выбранных мест
  const [selectedSeats, setSelectedSeats] = useState([]);
  // Состояние для отображения ошибки
  const [error, setError] = useState("");

  // Получаем данные о местах и функцию для обновления статуса стула
  const seats = useSeatsStore((state) => state.seats);
  const updateSeatStatus = useSeatsStore((state) => state.updateSeatStatus);

 
  const sectionPrices = {
    1: 399,
    2: 299,
    3: 199,
    4: 199,
  };

  const sectionLabels = {
    1: "VIP Tickets",
    2: "Standard Tickets",
    3: "Economic Tickets",
    4: "Economic Tickets",
  };

  // Обработчик клика по месту
  const handleClick = (section, row, col, status) => {
    // Ограничиваем выбор не более 3 мест
    if (selectedSeats.length >= 3 && !selectedSeats.some(seat => seat.section === section && seat.row === row && seat.col === col)) {
      setError("You can choose no more than 3 seats.");
      setTimeout(() => setError(""), 3000); // Ошибка исчезнет через 3 секунды
      return;
    }

    if (status === "available") {
      // Добавляем выбранное место
      setSelectedSeats([...selectedSeats, { section, row, col, price: sectionPrices[section] }]);
      updateSeatStatus(section, row, col, "selected");
    } else if (status === "selected") {
      // Убираем выбранное место из списка
      setSelectedSeats(selectedSeats.filter(seat => !(seat.section === section && seat.row === row && seat.col === col)));
      updateSeatStatus(section, row, col, "available");
    }
  };

  // Функция для получения иконки места в зависимости от его статуса
  const getSeatIcon = (status) => {
    switch (status) {
      case "available":
        return <img src={AvailableSeat} alt="Available Seat" />;
      case "reserved":
        return <img src={ReservedSeat} alt="Reserved Seat" />;
      case "selected":
        return <img src={SelectedSeat} alt="Selected Seat" />;
      default:
        return <img src={AvailableSeat} alt="Available Seat" />;
    }
  };

  // Рассчитываем общую цену для выбранных мест
  const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

  return (
    <div>
      <p className="stage">Stage</p>
      {/* Отображаем секции */}
      {[1].map((section) => (
        <div key={section} className="section__">
          

          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: section === 1 ? "repeat(24, 1fr)" : section === 2 || section === 4 ? "repeat(7, 1fr)" : "repeat(11, 1fr)",
              gap: "10px",
              top: "10px",
              marginBottom: "20px",
              
            }}
          >
            
            {seats
              .filter((seat) => seat.section === section)
              .map((seat, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleClick(seat.section, seat.row, seat.col, seat.status)
                  }
                  style={{
                    position: "absolute",
                    top: `${seat.top}px`, // Устанавливаем координаты
                    left: `${seat.left}px`, // Устанавливаем координаты
                    cursor: "pointer",
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  {getSeatIcon(seat.status)} 
                </button>
              ))}
          </div>
          <h3 className="seats__header">Section: {section}</h3>
        </div>
      ))}

      {[2].map((section) => (
        <div key={section} className="section__2">
          

          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: section === 1 ? "repeat(24, 1fr)" : section === 2 || section === 4 ? "repeat(7, 1fr)" : "repeat(11, 1fr)",
              gap: "10px",
              top: "50px",
              marginBottom: "20px",
              
            }}
          >
            
            {seats
              .filter((seat) => seat.section === section)
              .map((seat, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleClick(seat.section, seat.row, seat.col, seat.status)
                  }
                  style={{
                    position: "absolute",
                    top: `${seat.top}px`, // Устанавливаем координаты
                    left: `${seat.left}px`, // Устанавливаем координаты
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  {getSeatIcon(seat.status)}
                </button>
              ))}
          </div>
          <h3 className="seats__header2">Section: {section}</h3>
        </div>
      ))}

      {[3].map((section) => (
        <div key={section} className="section__3">
          

          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: section === 1 ? "repeat(24, 1fr)" : section === 2 || section === 4 ? "repeat(7, 1fr)" : "repeat(11, 1fr)",
              gap: "10px",
              top: "50px",
              marginBottom: "20px",
              
            }}
          >
            
            {seats
              .filter((seat) => seat.section === section)
              .map((seat, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleClick(seat.section, seat.row, seat.col, seat.status)
                  }
                  style={{
                    position: "absolute",
                    top: `${seat.top}px`, // Устанавливаем координаты
                    left: `${seat.left}px`, // Устанавливаем координаты
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  {getSeatIcon(seat.status)}
                </button>
              ))}
          </div>
          <h3 className="seats__header3">Section: {section}</h3>
        </div>
      ))}

{[4].map((section) => (
        <div key={section} className="section__4">
          

          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: section === 1 ? "repeat(24, 1fr)" : section === 2 || section === 4 ? "repeat(7, 1fr)" : "repeat(11, 1fr)",
              gap: "10px",
              top: "50px",
              marginBottom: "20px",
              
            }}
          >
            
            {seats
              .filter((seat) => seat.section === section)
              .map((seat, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleClick(seat.section, seat.row, seat.col, seat.status)
                  }
                  style={{
                    position: "absolute",
                    top: `${seat.top}px`, // Устанавливаем координаты
                    left: `${seat.left}px`, // Устанавливаем координаты
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  {getSeatIcon(seat.status)}
                </button>
              ))}
          </div>
          <h3 className="seats__header4">Section: {section}</h3>
        </div>
      ))}
      <img src={ Seats_position } alt="" />


      {/* Отображение информации о выбранных местах */}
      {selectedSeats.length > 0 && (
        <div style={{ marginTop: "70px", top: "200px", }}>
          
          {selectedSeats.map((seat, index) => (
            <div
              key={index}
              style={{
                top: "70px",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                padding: "5px",
              }}
            >
              
              
          <div style={{ position: "relative", display: "flex", alignItems: "start", right: "100px"}}>
                <img src={ Selected_pic } alt="Seat"  />
              </div>

              {/* Правая часть с информацией */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "start" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "500", marginBottom: "20px" }}>Taylor Swift: The Eras Tour</h2>
              <p style={{ fontSize: "18px", fontWeight: "400", marginBottom: "15px"}}>June 04, Mon. 08:00 pm.  {sectionLabels[seat.section]}</p>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "55px", marginBottom: "15px"}} >
                <p style={{fontSize: "20px", fontWeight: "500"}}><strong>Section:</strong> {seat.section}</p>
                <p style={{fontSize: "20px", fontWeight: "500"}}><strong>Row:</strong> {seat.row}</p>
                <p style={{fontSize: "20px", fontWeight: "500"}}><strong>Seat:</strong> {seat.col}</p>
              </div>
                <p style={{ display: "flex", marginLeft: "1px", fontSize: "20px", fontWeight: "500", marginBottom: "15px"}}><strong>Price:</strong> ${seat.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Отображение ошибки, если выбрано больше 3-х мест */}
      {error && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <p>{error}</p>
        </div>
      )}

      {/* Отображение общей цены, если выбрано хотя бы одно место */}
      {selectedSeats.length > 0 && (
        <div style={{position: "flex", flexDirection: "column", marginTop: "20px", fontWeight: "bold" }}>
          <div>
          <p style={{ display: "flex", marginLeft: "-65px", gap: "450px", fontSize: "20px"}}>Total USD: <strong>${totalPrice}</strong> </p>
          </div>
          <button style={{display: "flex", justifyContent: "center", alignItems: "center", width: "250px", height: "50px", cursor: "pointer", fontSize: "24px", fontWeight: "400", backgroundColor: "blue", color: "#fff", borderRadius: "12px", marginTop: "30px"}}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Seat;