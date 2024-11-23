
// import React from "react";
// import useSeatsStore from "./seatsStore"
// import Seat from "./Seat"

// const SeatsGrid = () => {
//     const seats = useSeatsStore((state) => state.seats);
  
//     return (
//       <div>
//         {[1].map((section) => (
//           <div key={section} className="section__seat">
          
//             <div
//               className="grid"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(24, 1fr)",
                
//                 gap: "10px",
//                 marginBottom: "20px",
//               }}
//             >
//               {seats
//                 .filter((seat) => seat.section === section)
//                 .map((seat, index) => (
//                   <Seat key={index} {...seat} />
//                 ))}
//             </div>
//             <h3>Section {section}</h3>
//           </div>
//         ))}
//         {[2].map((section) => (
//           <div key={section} className="section">
//             <h3>Section {section}</h3>
//             <div
//               className="grid"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(11, 1fr)",
                
//                 gap: "10px",
//                 marginBottom: "20px",
//               }}
//             >
//               {seats
//                 .filter((seat) => seat.section === section)
//                 .map((seat, index) => (
//                   <Seat key={index} {...seat} />
//                 ))}
//             </div>
//           </div>
//         ))}
//         {[3].map((section) => (
//           <div key={section} className="section">
//             <h3>Section {section}</h3>
//             <div
//               className="grid"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(7, 1fr)",
                
//                 gap: "10px",
//                 marginBottom: "20px",
//               }}
//             >
//               {seats
//                 .filter((seat) => seat.section === section)
//                 .map((seat, index) => (
//                   <Seat key={index} {...seat} />
//                 ))}
//             </div>
//           </div>
//         ))}
//         {[4].map((section) => (
//           <div key={section} className="section">
//             <h3>Section {section}</h3>
//             <div
//               className="grid"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(7, 1fr)",
                
//                 gap: "10px",
//                 marginBottom: "20px",
//               }}
//             >
//               {seats
//                 .filter((seat) => seat.section === section)
//                 .map((seat, index) => (
//                   <Seat key={index} {...seat} />
//                 ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

// export default SeatsGrid;

//  {/* {[1, 2, 3, 4].map((section) => (
//           <div key={section} className="section">
//             <h3>Section {section}</h3>
//             <div
//               className="grid"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(24, 1fr)",
                
//                 gap: "10px",
//                 marginBottom: "20px",
//               }}
//             >
//               {seats
//                 .filter((seat) => seat.section === section)
//                 .map((seat, index) => (
//                   <Seat key={index} {...seat} />
//                 ))}
//             </div>
//           </div>
//         ))} */}