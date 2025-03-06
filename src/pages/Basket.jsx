import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ticketer from "../components/assets/basket_taylor.png";
import download from "../components/assets/download.svg";
import share from "../components/assets/share.svg";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; // Импортируем библиотеку для захвата HTML в изображение
import "./Basket.css";

function Basket() {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        // Получаем билеты из localStorage при загрузке компонента
        const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        setTickets(savedTickets);
    }, []);

    // Функция для удаления конкретного билета из localStorage и обновления состояния
    const removeTicketFromLocalStorage = (ticketIndex) => {
        const updatedTickets = tickets.filter((_, index) => index !== ticketIndex); // Удаляет билет по индексу
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));  // Сохраняем обновленный список в localStorage
        setTickets(updatedTickets);  // Обновляем состояние
    };


    const downloadTicketAsPDF = (ticket) => {
        // Находим DOM-элемент, который нужно скачать
        const ticketElement = document.getElementById(`ticket-${ticket.concertName}`);

        // Используем html2canvas для захвата элемента как изображения с увеличенным разрешением
        html2canvas(ticketElement, { scale: 3 }).then((canvas) => {  // Увеличиваем scale до 3 или больше
            const imgData = canvas.toDataURL("image/png"); // Преобразуем изображение в формат base64
            const doc = new jsPDF();

            // Добавляем изображение на страницу PDF
            doc.addImage(imgData, "PNG", 10, 10, 180, 250); // Параметры: image, формат, x, y, ширина, высота
            doc.save(`${ticket.concertName}_ticket.pdf`); // Сохраняем PDF
        });
    };

    // Если билетов нет, показываем сообщение
    if (tickets.length === 0) {
        return (
            <div className="error">
                <h1>No Tickets Found</h1>
                <button onClick={() => navigate("/SelectTime")}>
                    Return to Checkout
                </button>
            </div>
        );
    }

    return (
        <div className="baskets">
            <h1 className="green__header">Payment Successful</h1>
            <p className="green__down">Here are your purchased tickets:</p>
            <div className="tickets-container">
                {tickets.map((ticket, index) => (
                    <div key={index} className="ticket-card">
                        <div className="right__sides">
                            <div className="sides__inform">
                                <h3 className="informs">Congratulations!</h3>
                                <p className="informs">You’ve successfully purchased the ticket for:</p>
                                <p className="informs">{ticket.concertName}</p>
                            </div>
                            <div className="sides__inform">
                                <h3 className="informs">Item Details</h3>
                                <p className="informs"><strong>Item: </strong> {ticket.concertName}</p>
                                <p className="informs"><strong>Quantity: </strong> {ticket.quantity} Tickets</p>
                                <p className="informs"><strong>Amount: </strong> ${ticket.amount}</p>
                            </div>
                            <div className="sides__inform">
                                <h3 className="informs">Customer Details</h3>
                                <p className="informs"><strong>Name: </strong> {ticket.customerName}</p>
                                <p className="informs"><strong>Email Address: </strong> {ticket.customerEmail}</p>
                                <p className="informs"><strong>Contact Number: </strong> {ticket.customerPhone}</p>
                            </div>
                            <div className="sides__inform__2">
                                <p className="informs">Thank you for choosing Ticketer!</p>
                                <p className="informs">You’ve unlocked special rewards:</p>
                                <p className="green__points">20% Discount on your next ticket!</p>
                                <p className="green__points">Earned 50 points for your purchase!</p>
                            </div>

                        </div>
                        <div id={`ticket-${ticket.concertName}`} className="left__sides">
                            <img className="gradient__image" src={ticketer} alt="Ticket" />
                            <div className="upper__img">
                                <div className="name__concert">
                                    <h3>Download Your Tickets!</h3>
                                    <p>{ticket.concertName}</p>
                                </div>
                                <div className="rows__section">
                                    <div className="row__section">
                                        <p>{ticket.quantity} Tickets</p>
                                        <p>Section: {ticket.section}</p>
                                        <p>Seats: {ticket.seats.join(", ")}</p>
                                        <p>Date: {ticket.date}</p>
                                    </div>
                                    <div className="row__section2">
                                        <p>Rows: {ticket.row.join(", ")}</p>
                                        <p>Time: {ticket.time}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btns_row">
                                <button
                                    className="share__btn"
                                    onClick={() => downloadTicketAsPDF(ticket)} // Скачиваем PDF при клике
                                >
                                    <img src={download} alt="Download" />
                                    Download Ticket
                                </button>
                                <button className="share__btn">
                                    <img src={share} alt="Share" />
                                    Share Ticket
                                </button>
                            </div>
                            <button
                                onClick={() => removeTicketFromLocalStorage(index)}
                                className="remove__btn"
                            >
                                Remove This Ticket
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Basket;