import React from "react";
import "./HomePage.css";
import LitecoinLabsLogo from "./HPImages/litecoinlabs.png";
import TwitterIcon from "./HPImages/twitter.svg";
import DiscordIcon from "./HPImages/discord.svg";
import OMIcon from "./HPImages/OMLogo.png";

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
        <button className="button" onClick={() => window.location.href = "/"}>LLabs</button>
        <div className="button-container">
        <button className="button-gallery" onClick={() => window.location.href = "/gallery"}>Gallery</button>
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
