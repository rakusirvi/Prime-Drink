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
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        color: "white", // make text visible on image
        position: "relative",
      }}
    >
      <Navbar />
      <Hero />
      <Hydration />
      <PrimeIce />
      <Energy />
      <RapidHydration />
      <Footer />
    </div>
  );
}

export default App;
