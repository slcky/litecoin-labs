import React from 'react';
import './Gallery.css';
import parsedData from './data';
import TwitterIcon from "./HPImages/twitter.svg";
import DiscordIcon from "./HPImages/discord.svg";
import OMIcon from "./HPImages/OMLogo.png";

function Gallery() {

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
    <div className="gallery">
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
      <main className="gallery-main">
        <div className="gallery-container">
          <div className="flex">
            <div className="left-column">
              <div className="filter-header">
                <h1 className="filter-text">
                  <span>Filter</span>
                </h1>
              </div>
              {/* Content for the left column goes here */}
            </div>
            <div className="right-column">
              <div className="grid-header">
                <h1 className="grid-header-text">
                  <span>Punks</span>
                </h1>
              </div>
              <div className="grid-container">
                {parsedData.map((row) => (
                  <div className="grid-cell" key={row['Asset #']}>
                    <img src={row['Image']} alt={`Punk #${row['Asset #']}`} />
                    <div className="punk-number">{`PUNK ${row['Asset #']}`}</div>
                    <div className="inscription-number">{`INSC. ${row['Inscription #']}`}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Gallery;
