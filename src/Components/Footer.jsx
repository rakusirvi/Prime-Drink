import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="top-section">
        <div className="section about-section">
          <h2>ABOUT PRIME</h2>
          <p >
            PRIME was developed to fill the void where great taste meets
            function. With bold, thirst-quenching flavors to help you refresh,
            replenish, and refuel, PRIME is the perfect boost for any endeavor.
            We're confident you'll love it as much as we do.
          </p>

          <ul>
            <li>
              <ion-icon name="logo-facebook"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-instagram"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-tiktok"></ion-icon>
            </li>
            <li>
              <ion-icon name="logo-twitter"></ion-icon>
            </li>
          </ul>
        </div>
        <div className="section footlink">
          <ul>
            <li>RAPID REHYDRATION</li>
            <li>ICE HYDRATION</li>
            <li>Hydration</li>
            <li>Hydration+ Sticks</li>
            <li>Energy</li>
          </ul>
        </div>
        <div className="section footlink">
          <ul>
            <li>Team + Athletes</li>
            <li>Creators</li>
            <li>Artists</li>
            <li>Ambassadors</li>
          </ul>
        </div>
        <div className="section footlink">
          <ul>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Privacy Policy Return Policy</li>
            <li>Contact US</li>
          </ul>
        </div>
        <div className="section section_newsletter">
          <h2>NewsLetter</h2>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input type="email" id="" placeholder="Enter Your Email" />
          <p>
            By subscribing, you consent to receive marketing communications from
            PRIME using the provided email address and phone number. Consent to
            receive marketing is not required for purchase. Standard data and
            messaging rates may apply. You can opt-out at any time by contacting
            us or using the unsubscribe link. See our Privacy Policy for
            details.
          </p>
          <a href="#" className="Subscribe-btn">
            SUBSCRIBE{" "}
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
