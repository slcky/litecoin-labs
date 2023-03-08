import React from "react";
import "./HomePage.css";
import LitecoinLabsLogo from "./HPImages/litecoinlabs.png";
import TwitterIcon from "./HPImages/twitter.svg";
import DiscordIcon from "./HPImages/discord.svg";
import InstagramIcon from "./HPImages/instagram.svg";

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
          <button className="button" href="/">LLabs</button>
        <div className="button-container">
          <button className="button-gallery">Gallery</button>
          <button className="button-alt">
            <img src={TwitterIcon} alt="Twitter icon" />
          </button>
          <button className="button-alt">
            <img src={DiscordIcon} alt="Discord icon" />
          </button>
          <button className="button-alt">
            <img src={InstagramIcon} alt="Instagram icon" />
          </button>
        </div>
      </header>
      <main className="main">
        <img src={LitecoinLabsLogo} alt="Litecoin Labs Logo" />
      </main>
    </div>
  );
}

export default HomePage;
