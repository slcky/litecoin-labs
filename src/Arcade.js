import React from "react";
import "./Arcade.css";
import TwitterIcon from "./HPImages/twitter.svg";
import DiscordIcon from "./HPImages/discord.svg";
import OMIcon from "./HPImages/OMLogo.png";
import { Link } from "react-router-dom";

function Arcade() {
  const handleTwitterClick = () => {
    window.open("https://twitter.com/LitecoinPunks", "_blank");
  };

  const handleDiscordClick = () => {
    window.open("https://discord.gg/litecoinpunks", "_blank");
  };

  const handleOMClick = () => {
    window.open(
      "https://ordinals.market/collection/ordinals/litecoin-punks",
      "_blank"
    );
  };

  return (
    <div className="homepage">
      <header className="header">
        <Link to="/" className="button">
          LLabs
        </Link>
        <div className="button-container">
          <Link to="/gallery" className="button-right">
            Gallery
          </Link>
          <Link to="/arcade" className="button-right">
            Arcade
          </Link>
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
      <div className="all-games">
        <div className="canvas-container">
          <span className="game-name">Flappy Chikun</span>
          <iframe
            className="game-container"
            title="Flappy Chikun"
            src="https://litecoin.earlyordies.com/content/9e032f09c80d42a04ef152cdc3d5ed654ce54ad4c09de0b6a0e82bc43ce9b58ei0"
            width="300px"
            height="435px"
            frameBorder="0"
          ></iframe>
          <span className="insc-number" onClick={() => window.open("https://litecoin.earlyordies.com/inscription/9e032f09c80d42a04ef152cdc3d5ed654ce54ad4c09de0b6a0e82bc43ce9b58ei0", "_blank")}>LTC Insc. 2014</span>
        </div>
        <div className="canvas-container">
          <span className="game-name">Flappy Chikun</span>
          <iframe
            className="game-container"
            title="Flappy Chikun"
            src="https://ordinals.com/content/c692050303c31b623283d9487bfa18f04e8f4ee470066d7e960589740f8d90fai0"
            width="300px"
            height="435px"
            frameBorder="0"
          ></iframe>
          <span className="insc-number" onClick={() => window.open("https://ordinals.com/inscription/c692050303c31b623283d9487bfa18f04e8f4ee470066d7e960589740f8d90fai0", "_blank")}>BTC Insc. 400449</span>
        </div>
      </div>
      </main>
    </div>
  );
}

export default Arcade;
