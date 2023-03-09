import React, { useState } from 'react';
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

   // Get all the possible filter options from the data
   const filterOptions = {
    Mouth: new Set(),
    Eyewear: new Set(),
    Headwear: new Set(),
    Background: new Set(),
    Eyes: new Set(),
    Body: new Set(),
    Outerwear: new Set(),
  };
  parsedData.forEach(row => {
    Object.keys(filterOptions).forEach(option => {
      filterOptions[option].add(row[option]);
    });
  });

  // State to keep track of which filter options are currently selected
  const [selectedFilters, setSelectedFilters] = useState({
    Mouth: new Set(),
    Eyewear: new Set(),
    Headwear: new Set(),
    Background: new Set(),
    Eyes: new Set(),
    Body: new Set(),
    Outerwear: new Set(),
  });

  // State to keep track of whether each filter option is currently expanded or collapsed
  const [filterOptionExpanded, setFilterOptionExpanded] = useState({
    Mouth: false,
    Eyewear: false,
    Headwear: false,
    Background: false,
    Eyes: false,
    Body: false,
    Outerwear: false,
  });

  // Toggle a filter option on or off
  const toggleFilterOption = (option, value) => {
    const newSelectedFilters = { ...selectedFilters };
    if (newSelectedFilters[option].has(value)) {
      newSelectedFilters[option].delete(value);
    } else {
      newSelectedFilters[option].add(value);
    }
    setSelectedFilters(newSelectedFilters);
  };

  // Sort function to use when sorting the filtered data
  const sortFunction = (a, b) => {
    // Put items with more selected filters first
    const aScore = Object.keys(selectedFilters).filter(option => selectedFilters[option].has(a[option])).length;
    const bScore = Object.keys(selectedFilters).filter(option => selectedFilters[option].has(b[option])).length;
    if (aScore > bScore) {
      return -1;
    } else if (aScore < bScore) {
      return 1;
    } else {
      // If two items have the same number of selected filters, sort by Asset #
      return a['Asset #'] - b['Asset #'];
    }
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
              <div className="filter-menu">
                {Object.keys(filterOptions).map(option => (
                  <div className="filter-menu-item" key={option}>
                    <label htmlFor={`${option}-select`}>{option}</label>
                    {filterOptions[option].size > 1 ? (
                      <div className="filter-checkboxes">
                        <div
                          className="filter-checkbox-toggle"
                          onClick={() => setFilterOptionExpanded(prevState => ({
                            ...prevState,
                            [option]: !prevState[option],
                          }))}
                        >
                          {filterOptionExpanded[option] ? "-" : "+"}
                        </div>
                        {filterOptionExpanded[option] && (
                          <div className="filter-checkboxes-list">
                            {[...filterOptions[option]].map(value => (
                              <label key={value}>
                                <input
                                  type="checkbox"
                                  value={value}
                                  checked={selectedFilters[option].has(value)}
                                  onChange={() => toggleFilterOption(option, value)}
                                />
                                {value}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <select
                        id={`${option}-select`}
                        value={selectedFilters[option].size > 0 ? [...selectedFilters[option]][0] : ""}
                        onChange={e => toggleFilterOption(option, e.target.value)}
                      >
                        <option value="">All</option>
                        {[...filterOptions[option]].map(value => (
                          <option value={value} key={value}>{value}</option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}
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
                {parsedData.filter(row => {
                  return Object.keys(selectedFilters).every(option => {
                    return selectedFilters[option].size === 0 || selectedFilters[option].has(row[option]);
                  });
                }).sort(sortFunction).map(row => (
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
