import { useState, useEffect } from "react";
import "./Navbar.css";
import Image from "../assets/navbar/1st.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [showShop, setShowShop] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleShop = () => {
    setShowShop((prev) => {
      const newState = !prev;
      if (newState) setShowAbout(false); // Close ABOUT if SHOP opens
      return newState;
    });
  };

  const toggleAbout = () => {
    setShowAbout((prev) => {
      const newState = !prev;
      if (newState) setShowShop(false); // Close SHOP if ABOUT opens
      return newState;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.6;
      setIsScrolled(window.scrollY > triggerPoint);
      setShowAbout(false);
      setShowShop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-1">
          <div className="flexi USUK">
            <div>
              <Link>UK</Link>
            </div>
            <div>
              <Link>US</Link>
            </div>
          </div>
          <div className="Prime">PRIME</div>
          <div className=" flexic icons">
            <div>
              <Link to="/Prime-Drink/login">
                <ion-icon name="people-outline"></ion-icon>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <ion-icon name="search-outline"></ion-icon>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <ion-icon name="cart-outline"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="header-2">
          <div className="header-2">
            <div
              className={`dropdown-container Shop-nav-btn ${
                showShop ? "HoveredClass" : ""
              }`}
              onClick={toggleShop}
            >
              <div className="nav-item">
                <Link>SHOP</Link>
              </div>
            </div>

            <div
              className={`dropdown-container About-nav-btn ${
                showAbout ? "HoveredClass" : ""
              }`}
              onClick={toggleAbout}
            >
              <div className="nav-item">
                <Link>ABOUT PRIME</Link>
              </div>
            </div>

            <div className="dropdown-container">
              <div className="nav-item">
                <Link>WHERE TO BUY</Link>
              </div>
            </div>

            <div className="dropdown-container">
              <div className="nav-item">
                <Link>VERIFY YOUR PRIME</Link>
              </div>
            </div>
          </div>
        </div>
        {showShop && (
          <div className="dropdown-menu">
            <div className="dropdown">
              <h2>SHOP PRIME</h2>
              <ul>
                <li>HYDRATION</li>
                <li>ENERGY</li>
                <li>ICE HYDRATION</li>
                <li>RAPID REHYDRATION</li>
                <li>HYDRATION+ STICKS</li>
              </ul>
            </div>
            <div className="dropdown">
              <h2>FEATURED FLAVORS</h2>
              <ul>
                <li>SNOWBALL SLUSHY</li>
                <li>KIWI BERRY</li>
                <li>PESO PLUMA</li>
                <li>KSI THE NIGHTMARE</li>
                <li>ORANGE KREAM</li>
                <li>OCEAN CHERRY</li>
              </ul>
            </div>
            <div className="image-section">
              <div className="img-wrapper">
                <img className="navbar-img" src={Image} alt="Snowball Slushy" />
              </div>
              <div className="img-wrapper">
                <img className="navbar-img" src={Image} alt="Kiwi Berry" />
              </div>
            </div>
          </div>
        )}
        {showAbout && (
          <div className="dropdown-menu">
            <div>
              <ul>
                <li>Teams + Athletes</li>
                <li>Creators</li>
                <li>Artists</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
