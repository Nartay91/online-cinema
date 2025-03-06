import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header  /> 
      <Outlet  /> 
      <Footer />
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import SignupPage from './components/SignupPage';
// import Dashboard from './pages/dashboard';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignupPage />} />
//         <Route path="/welcome" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
