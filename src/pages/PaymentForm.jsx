import React, { useState } from "react";
import InputMask from "react-input-mask";
import paypal from "../components/assets/paypal.svg";
import mastercard from "../components/assets/mastercard.svg";
import visa from "../components/assets/visa.svg";

const PaymentForm = ({ onPaymentSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Проверка заполнения всех полей
  const validateForm = () => {
    return paymentMethod && cardNumber && expirationDate && cvv && nameOnCard;
  };

  // Обновление состояния формы
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setIsFormValid(validateForm());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onPaymentSuccess(); // Вызываем обработчик оплаты
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="payment__header">Payment Details</h2>
      <div className="radio__3">
        <label className="option_card">
            <img src={paypal} alt="" />
          <input
            className="option__radio"
            type="radio"
            name="paymentMethod"
            value="paypal"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setIsFormValid(validateForm());
            }}
          />
          PayPal
        </label>
        <label className="option_card">
            <img src={mastercard} alt="" />
          <input
            className="option__radio"
            type="radio"
            name="paymentMethod"
            value="creditCard"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setIsFormValid(validateForm());
            }}
          />
          Credit Card
        </label>
        <label className="option_card">
            <img src={visa} alt="" />
          <input
            className="option__radio"
            type="radio"
            name="paymentMethod"
            value="visa"
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setIsFormValid(validateForm());
            }}
          />
          Visa
        </label>
      </div>

      <div>
        <div>
          <label className="name__card">Card Number</label>
          <InputMask
            mask="9999 9999 9999 9999"
            value={cardNumber}
            onChange={handleInputChange(setCardNumber)}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                className="card__detail_1"
                type="text"
                placeholder="xxxx xxxx xxxx xxxx"
                required
              />
            )}
          </InputMask>
        </div>

        <div className="date_cvv">
          <div>
            <label className="name__card">Expiration Date</label>
            <InputMask
              mask="99/99"
              value={expirationDate}
              onChange={handleInputChange(setExpirationDate)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="card__detail_2"
                  type="text"
                  placeholder="MM/YY"
                  required
                />
              )}
            </InputMask>
          </div>

          <div>
            <label className="name__card">CVV</label>
            <InputMask
              mask="999"
              value={cvv}
              onChange={handleInputChange(setCvv)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="card__detail_2"
                  type="text"
                  placeholder="XXX"
                  required
                />
              )}
            </InputMask>
          </div>
        </div>

        <div>
          <label className="name__card">Name On Card</label>
          <input
            className="card__detail_1"
            type="text"
            placeholder="Enter your name"
            value={nameOnCard}
            onChange={handleInputChange(setNameOnCard)}
            required
          />
        </div>
      </div>

      <div>
        <label className="name__card">Discount Code</label>
        <input
          className="card__detail_1"
          type="text"
          placeholder="Enter discount code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
      </div>

      <div>
        <label className="card__privacy">
          <input type="checkbox" required />
          By clicking this, I agree to Ticketer Privacy Policy
        </label>
      </div>

      <button
        className="buy_tickets"
        type="submit"
        disabled={!isFormValid} // Кнопка активна только если форма валидна
        style={{
          backgroundColor: isFormValid ? "#007bff" : "#ccc",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: isFormValid ? "pointer" : "not-allowed",
        }}
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;

// import React, { useState } from "react";

// const PaymentForm = ({ onPaymentSuccess }) => {
//     const [paymentMethod, setPaymentMethod] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [expirationDate, setExpirationDate] = useState("");
//     const [cvv, setCvv] = useState("");
//     const [nameOnCard, setNameOnCard] = useState("");
//     const [discountCode, setDiscountCode] = useState("");
//     const [isFormValid, setIsFormValid] = useState(false);

//     // Проверка заполнения всех полей
//     const validateForm = () => {
//         return (
//             paymentMethod &&
//             cardNumber &&
//             expirationDate &&
//             cvv &&
//             nameOnCard
//         );
//     };

//     // Обновление состояния формы
//     const handleInputChange = (setter) => (e) => {
//         setter(e.target.value);
//         setIsFormValid(validateForm());
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (isFormValid) {
//             onPaymentSuccess(); // Вызываем обработчик оплаты
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2 className="payment__header">Payment Details</h2>
//             <div className="radio__3">
//                 <label className="option_card">
//                     <input className="option__radio"
//                         type="radio"
//                         name="paymentMethod"
//                         value="paypal"
//                         onChange={(e) => {
//                             setPaymentMethod(e.target.value);
//                             setIsFormValid(validateForm());
//                         }}
//                     />
//                     PayPal
//                 </label >
//                 <label className="option_card">
//                     <input className="option__radio"
//                         type="radio"
//                         name="paymentMethod"
//                         value="creditCard"
//                         onChange={(e) => {
//                             setPaymentMethod(e.target.value);
//                             setIsFormValid(validateForm());
//                         }}
//                     />
//                     Credit Card
//                 </label>
//                 <label className="option_card">
//                     <input className="option__radio"
//                         type="radio"
//                         name="paymentMethod"
//                         value="visa"
//                         onChange={(e) => {
//                             setPaymentMethod(e.target.value);
//                             setIsFormValid(validateForm());
//                         }}
//                     />
//                     Visa
//                 </label>
//             </div>
//             <div>
//                 <div>
//                     <label className="name__card">Card Number</label>
//                     <input className="card__detail_1"
//                         type="text"
//                         placeholder="xxxx xxxx xxxx xxxx"
//                         value={cardNumber}
//                         onChange={handleInputChange(setCardNumber)}
//                         required
//                     />
//                 </div>
//                 <div className="date_cvv">
//                     <div>
//                         <label className="name__card">Expiration Date</label>
//                         <input className="card__detail_2"
//                             type="text"
//                             placeholder="MM/YY"
//                             value={expirationDate}
//                             onChange={handleInputChange(setExpirationDate)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="name__card">CVV</label>
//                         <input className="card__detail_2"
//                             type="text"
//                             placeholder="XXX"
//                             value={cvv}
//                             onChange={handleInputChange(setCvv)}
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div>
//                     <label className="name__card">Name On Card</label>
//                     <input className="card__detail_1"
//                         type="text"
//                         placeholder="Enter your name"
//                         value={nameOnCard}
//                         onChange={handleInputChange(setNameOnCard)}
//                         required
//                     />
//                 </div>
//             </div>
//             <div>
//                 <label className="name__card">Discount Code</label>
//                 <input className="card__detail_1"
//                     type="text"
//                     placeholder="Enter discount code"
//                     value={discountCode}
//                     onChange={(e) => setDiscountCode(e.target.value)}
//                 />
//             </div>
//             <div>
//                 <label className="card__privacy">
//                     <input type="checkbox" required />
//                     By clicking this, I agree to Ticketer Privacy Policy
//                 </label>
//             </div>
//             <button className="buy_tickets"
//                 type="submit"
//                 disabled={!isFormValid} // Кнопка активна только если форма валидна
//                 style={{
//                     backgroundColor: isFormValid ? "#007bff" : "#ccc",
//                     color: "#fff",
//                     border: "none",
//                     padding: "10px",
//                     cursor: isFormValid ? "pointer" : "not-allowed",
//                 }}
//             >
//                 Pay Now
//             </button>
//         </form>
//     );
// };

// export default PaymentForm;
