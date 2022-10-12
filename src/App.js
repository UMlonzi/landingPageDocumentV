import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Auth from './components/auth/Auth';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Auth/>
    </div>
  );
}

export default App;


// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Consulting from "./pages/Consulting";
// import Contactus from "./pages/Contactus";
// import Design from "./pages/Design";
// import Development from "./pages/Development";
// import Marketing from "./pages/Marketing";
// import Products from "./pages/Products";
// import Services from "./pages/Services";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home/>}></Route>
//           <Route path="/contactus" element={<Contactus/>}></Route>
//           <Route path="/products" element={<Products/>}></Route>
//           <Route path="/services" element={<Services/>}></Route>
//           <Route path="/signup" element={<Signup/>}></Route>
//           <Route path="/marketing" element={<Marketing/>}></Route>
//           <Route path="/development" element={<Development/>}></Route>
//           <Route path="/design" element={<Design/>}></Route>
//           <Route path="/consulting" element={<Consulting/>}></Route>
//         </Routes>

//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
