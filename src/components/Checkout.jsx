
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSeatsStore from "../components/store/seatsStore"; // импорт хранилища
import "./Checkout.css";
import PaymentForm from "../pages/PaymentForm";
import Selected_pic from "./assets/selected_pic.png";
import Stop from "./assets/stopwatch.svg";

const Checkout = () => {
  const location = useLocation();
  const { selectedSeats, totalPrice } = location.state;
  const updateSeatStatus = useSeatsStore((state) => state.updateSeatStatus); // функция для обновления статуса места

  const navigate = useNavigate();

  // Состояние для таймера (10 минут)
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 минут в секундах

  // Подсчет сервисного сбора и общей суммы
  const serviceFees = selectedSeats.length * 1; // $1 за каждое место
  const totalWithFees = totalPrice + serviceFees;

  // Обработчик успешной оплаты
  const handlePaymentSuccess = () => {
    const ticketData = {
      concertName: "Taylor Swift: The Eras Tour",
      quantity: selectedSeats.length, // Количество выбранных мест
      amount: totalWithFees, // Общая сумма с учетом комиссии
      customerName: "John Doe",
      customerEmail: "johndoe@example.com",
      customerPhone: "98 123 456 7890",
      date: "4 June",
      time: "8:00 pm",
      section: selectedSeats[0]?.section || "-", // Секция первого места
      seats: selectedSeats.map((seat) => seat.col),
      row: selectedSeats.map((seat) => seat.row),
      image: Selected_pic, // Изображение билета
    };

    // Вызов функции для сохранения билетов в localStorage и редиректа на страницу корзины
    handlePurchase(ticketData);

    // Обновляем статус мест на "reserved"
    selectedSeats.forEach((seat) => {
      updateSeatStatus(seat.section, seat.row, seat.col, "reserved");
    });
  };

  // Таймер обратного отсчета
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Останавливаем таймер, когда время истечет
          // Перенаправляем на родительскую страницу, например "/home"
          navigate("/SelectTime");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
  }, [navigate]);

  // Конвертация времени в минуты и секунды
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Пример функции для сохранения билетов в localStorage после успешной покупки
  const handlePurchase = (ticketData) => {
    // Получаем уже сохраненные билеты из localStorage
    const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    savedTickets.push(ticketData);

    // Сохраняем обновленный список билетов в localStorage
    localStorage.setItem("tickets", JSON.stringify(savedTickets));

    // Переход на страницу корзины с данными о билете
    navigate("/Basket", { state: ticketData });
  };

  const sectionLabels = {
    1: "VIP Tickets",
    2: "Standard Tickets",
    3: "Economic Tickets",
    4: "Economic Tickets",
  };

  return (
    <div className="checkout__form">
      <h1 className="header__checkout">Checkout</h1>
      <p className="header__checkout">Fill Out Necessary Information here.</p>
      <p className="stop_timer">
        <img src={Stop} alt="" /> {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <div className="cards_method">
        <div className="card_data">
          <h3 className="checked__tickets">Your Ticket List</h3>
          {selectedSeats.length > 0 && (
            <div style={{ marginTop: "70px", top: "200px" }}>
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
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "start",
                      right: "80px",
                    }}
                  >
                    <img src={Selected_pic} alt="Seat" />
                  </div>

                  {/* Правая часть с информацией */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "start",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "28px",
                        fontWeight: "500",
                        marginBottom: "20px",
                      }}
                    >
                      Taylor Swift: The Eras Tour
                    </h2>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        marginBottom: "15px",
                      }}
                    >
                      June 04, Mon. 08:00 pm. {sectionLabels[seat.section]}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "55px",
                        marginBottom: "15px",
                      }}
                    >
                      <p style={{ fontSize: "20px", fontWeight: "500" }}>
                        <strong>Section:</strong> {seat.section}
                      </p>
                      <p style={{ fontSize: "20px", fontWeight: "500" }}>
                        <strong>Row:</strong> {seat.row}
                      </p>
                      <p style={{ fontSize: "20px", fontWeight: "500" }}>
                        <strong>Seat:</strong> {seat.col}
                      </p>
                    </div>
                    <p
                      style={{
                        display: "flex",
                        marginLeft: "1px",
                        fontSize: "20px",
                        fontWeight: "500",
                        marginBottom: "15px",
                      }}
                    >
                      <strong>Price:</strong> ${seat.price}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "50px", marginLeft: "-75px" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "470px",
                    fontSize: "20px",
                  }}
                >
                  Total USD: <strong>${totalPrice}</strong>
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "470px",
                    fontSize: "20px",
                    marginBottom: "50px"
                  }}
                >
                  Service Fees: <strong>${serviceFees}</strong>
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "430px",
                    fontSize: "20px",
                    marginTop: "20px",
                    borderTop: "1px solid #ccc",
                    paddingTop: "10px",
                  }}
                >
                  Total with Fees: <strong>${totalWithFees}</strong>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="payment_form">
          <PaymentForm
            onPaymentSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;


// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import useSeatsStore from "../components/store/seatsStore"; // импорт хранилища
// import "./Checkout.css";
// import PaymentForm from "../pages/PaymentForm";
// import Selected_pic from "./assets/selected_pic.png";
// import Stop from "./assets/stopwatch.svg";

// const Checkout = () => {
//   const location = useLocation();
//   const { selectedSeats, totalPrice } = location.state;
//   const updateSeatStatus = useSeatsStore((state) => state.updateSeatStatus); // функция для обновления статуса места

//   const navigate = useNavigate();

//   // Состояние для таймера (10 минут)
//   const [timeLeft, setTimeLeft] = useState(20 * 60); // 10 минут в секундах

//   // Обработчик успешной оплаты
//   const handlePaymentSuccess = () => {
//     const ticketData = {
//       concertName: "Taylor Swift: The Eras Tour",
//       quantity: selectedSeats.length, // Количество выбранных мест
//       amount: totalWithFees, // Общая сумма с учетом комиссии
//       customerName: "John Doe",
//       customerEmail: "johndoe@example.com",
//       customerPhone: "98 123 456 7890",
//       date: "4 June",
//       time: "8:00 pm",
//       section: selectedSeats[0]?.section || "-", // Секция первого места
//       seats: selectedSeats.map((seat) => seat.col), // Номера мест
//       image: Selected_pic, // Изображение билета
//     };
//     navigate("/Basket", { state: ticketData });
//     // Обновляем статус мест на "reserved"
//     selectedSeats.forEach((seat) => {
//       updateSeatStatus(seat.section, seat.row, seat.col, "reserved");
//     });

//     // Редирект на страницу корзины (или другую страницу после оплаты)
//     // navigate("/Basket");
//   };

//   // Таймер обратного отсчета
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timer); // Останавливаем таймер, когда время истечет
//           // Перенаправляем на родительскую страницу, например "/home"
//           navigate("/SelectTime");
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
//   }, [navigate]);

//   // Конвертация времени в минуты и секунды
//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   // Подсчет сервисного сбора и общей суммы
//   const serviceFees = selectedSeats.length * 1; // $1 за каждое место
//   const totalWithFees = totalPrice + serviceFees;
  
//   // Пример функции для сохранения билетов в localStorage после успешной покупки
// const handlePurchase = (ticketData) => {
//   // Получаем уже сохраненные билеты из localStorage
//   const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
//   savedTickets.push(ticketData);

//   // Сохраняем обновленный список билетов в localStorage
//   localStorage.setItem("tickets", JSON.stringify(savedTickets));

//   // Переход на страницу корзины с данными о билете
//   navigate("/Basket", { state: ticketData });
// };


//   const sectionLabels = {
//     1: "VIP Tickets",
//     2: "Standard Tickets",
//     3: "Economic Tickets",
//     4: "Economic Tickets",
//   };

//   return (
//     <div className="checkout__form">
//       <h1 className="header__checkout">Checkout</h1>
//       <p className="header__checkout">Fill Out Necessary Information here.</p>
//       <p className="stop_timer">
//         <img src={Stop} alt="" /> {minutes < 10 ? `0${minutes}` : minutes}:
//         {seconds < 10 ? `0${seconds}` : seconds}
//       </p>
//       <div className="cards_method">
//         <div>
//           <h3 className="checked__tickets">Your Ticket List</h3>
//           {selectedSeats.length > 0 && (
//             <div style={{ marginTop: "70px", top: "200px" }}>
//               {selectedSeats.map((seat, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     top: "70px",
//                     display: "flex",
//                     alignItems: "start",
//                     justifyContent: "start",
//                     padding: "5px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       position: "relative",
//                       display: "flex",
//                       alignItems: "start",
//                       right: "100px",
//                     }}
//                   >
//                     <img src={Selected_pic} alt="Seat" />
//                   </div>

//                   {/* Правая часть с информацией */}
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "flex-start",
//                       justifyContent: "start",
//                     }}
//                   >
//                     <h2
//                       style={{
//                         fontSize: "28px",
//                         fontWeight: "500",
//                         marginBottom: "20px",
//                       }}
//                     >
//                       Taylor Swift: The Eras Tour
//                     </h2>
//                     <p
//                       style={{
//                         fontSize: "18px",
//                         fontWeight: "400",
//                         marginBottom: "15px",
//                       }}
//                     >
//                       June 04, Mon. 08:00 pm. {sectionLabels[seat.section]}
//                     </p>
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         gap: "55px",
//                         marginBottom: "15px",
//                       }}
//                     >
//                       <p style={{ fontSize: "20px", fontWeight: "500" }}>
//                         <strong>Section:</strong> {seat.section}
//                       </p>
//                       <p style={{ fontSize: "20px", fontWeight: "500" }}>
//                         <strong>Row:</strong> {seat.row}
//                       </p>
//                       <p style={{ fontSize: "20px", fontWeight: "500" }}>
//                         <strong>Seat:</strong> {seat.col}
//                       </p>
//                     </div>
//                     <p
//                       style={{
//                         display: "flex",
//                         marginLeft: "1px",
//                         fontSize: "20px",
//                         fontWeight: "500",
//                         marginBottom: "15px",
//                       }}
//                     >
//                       <strong>Price:</strong> ${seat.price}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//               <div style={{ marginTop: "50px", marginLeft: "-75px" }}>
//                 <p
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     gap: "490px",
//                     fontSize: "20px",
//                   }}
//                 >
//                   Total USD: <strong>${totalPrice}</strong>
//                 </p>
//                 <p
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     gap: "490px",
//                     fontSize: "20px",
//                     marginBottom: "50px"
//                   }}
//                 >
//                   Service Fees: <strong>${serviceFees}</strong>
//                 </p>
//                 <p
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     gap: "450px",
//                     fontSize: "20px",
//                     marginTop: "20px",
//                     borderTop: "1px solid #ccc",
//                     paddingTop: "10px",
//                   }}
//                 >
//                   Total with Fees: <strong>${totalWithFees}</strong>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="payment_form">
//           <PaymentForm
//             onPaymentSuccess={handlePaymentSuccess}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
