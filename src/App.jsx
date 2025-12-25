import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import bgImage from "./assets/abc.webp";
import Hero from "./Components/Hero.jsx";
import Hydration from "./Components/Hydration.jsx";
import PrimeIce from "./Components/PrimeIce.jsx";
import Energy from "./Components/Energy.jsx";
import RapidHydration from "./Components/RapidHydration.jsx";
import Footer from "./Components/Footer.jsx";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/Pages/Login/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Prime-Drink" />} />
          <Route
            path="/Prime-Drink"
            element={
              <>
                {/* 2. Pass the setter function to Navbar so the login icon can change the page */}
                <div
                  className="hero-section"
                  style={{
                    padding: "0",
                    margin: "0",
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maxHeight: "85vh",
                    width: "100%",
                    color: "white",
                    position: "relative",
                  }}
                >
                  <Hero />
                </div>
                <Hydration />
                <PrimeIce />
                <Energy />
                <RapidHydration />
              </>
            }
          />
          <Route path="/Prime-Drink/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
