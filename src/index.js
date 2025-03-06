import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectTime from './components/SelectTime';
import Time from './components/Choosetime';
import ConcertSlider from "./pages/Home";
import Notes from "./pages/Notes";
import Concerts from './pages/Concerts';
import Singers from "./pages/Singers";
import Basket from "./pages/Basket";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Checkout from "./components/Checkout";
import SignUp from './pages/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<ConcertSlider />} /> {/* Home */}
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/singers" element={<Singers />} />
          <Route path="time" element={<Time />} /> {/* Time */}
          <Route path="concert/:concertName" element={<Time />} /> {/* Concert */}
          <Route path="SelectTime" element={<SelectTime />} />
          <Route path="Notes" element={< Notes />} />
          <Route path="/checkout" element={< Checkout />} />
          <Route path="/basket" element={<Basket />} /> {/* Basket */}
          <Route path="/signup" element={<SignUp />} /> {/* Sign Up */}
          {/* <Route path="concert/:concertName" element={<SelectTime />} */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SelectTime from './components/SelectTime';
// import Time from './components/Choosetime';
// import ConcertSlider from "./pages/Home";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<App />} >
//           <Route path="/" element={<ConcertSlider />} />
//           <Route path="/" element={<Time />} />
//           <Route path="/SelectTime" element={<SelectTime />} />
//           <Route path="/concert/:concertName" element={<Time />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
