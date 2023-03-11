import React from "react";
import "./HomePage.css";
import LitecoinLabsLogo from "./HPImages/litecoinlabs.png";
import TwitterIcon from "./HPImages/twitter.svg";
import DiscordIcon from "./HPImages/discord.svg";
import OMIcon from "./HPImages/OMLogo.png";
import { Link } from 'react-router-dom';

function HomePage() {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/LitecoinPunks", "_blank");
  };

  const handleDiscordClick = () => {
    window.open("https://discord.gg/litecoinpunks", "_blank");
  };

  const handleOMClick = () => {
    window.open("https://ordinals.market/collection/ordinals/litecoin-punks", "_blank");
  };

  return (
    <div className="homepage">
      <header className="header">
        <Link to="/" className="button">LLabs</Link>
        <div className="button-container">
          <Link to="/gallery" className="button-right">Gallery</Link>
          <Link to="/arcade" className="button-right">Arcade</Link>
          <button className="button-alt" onClick={handleTwitterClick}>
            <img src={TwitterIcon} alt="Twitter icon" />
          </button>
          <button className="button-alt" onClick={handleDiscordClick}>
            <img src={DiscordIcon} alt="Discord icon" />
          </button>
          <button className="button-om" onClick={handleOMClick}>
            <img src={OMIcon} alt="OM icon" />
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
