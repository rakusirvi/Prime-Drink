import { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [showShop, setShowShop] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.6;

      if (window.scrollY > triggerPoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-1">
          <div className="flexi USUK">
            <div>UK</div>
            <div>US</div>
          </div>
          <div className="Prime">PRIME</div>
          <div className=" flexi icons">
            <div>
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="search-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div className="header-2">
          <div className="header-2">
            <div
              className="dropdown-container"
              onMouseEnter={() => setShowShop(true)}
              onMouseLeave={() => setShowShop(false)}
            >
              <div className="nav-item">SHOP</div>
              {showShop && (
                <div className="dropdown-menu">
                  <a href="#">Hydration</a>
                  <a href="#">Energy</a>
                  <a href="#">Bundles</a>
                </div>
              )}
            </div>

            <div
              className="dropdown-container"
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <div className="nav-item">ABOUT PRIME</div>
              {showAbout && (
                <div className="dropdown-menu">
                  <a href="#">Teams + Athletes</a>
                  <a href="#">Creators</a>
                  <a href="#">Artists</a>
                </div>
              )}
            </div>

            <div className="dropdown-container">
              <div className="nav-item">WHERE TO BUY</div>
            </div>

            <div className="dropdown-container">
              <div className="nav-item">VERIFY YOUR PRIME</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
