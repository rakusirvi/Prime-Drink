import { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import bgImage from "./assets/abc.webp";
import Hero from "./Components/Hero.jsx";
import Hydration from "./Components/Hydration.jsx";
import PrimeIce from "./Components/PrimeIce.jsx";
import Energy from "./Components/Energy.jsx";
import RapidHydration from "./Components/RapidHydration.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <div className="main-wrapper">
      <div
        className="hero-section"
        style={{
          padding: "0",
          margin: "0",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxHeight: "85vh", // Use minHeight so it grows with content if needed
          width: "100%",
          color: "white",
          position: "relative",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      {/* Move other sections outside the background div if they shouldn't share that BG */}
      <Hydration />
      <PrimeIce />
      <Energy />
      <RapidHydration />
      <Footer />
    </div>
  );
}

export default App;
