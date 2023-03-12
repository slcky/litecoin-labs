import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import parsedData from './data';
import moonBirdsData from './moonbirdsdata';
import TwitterIcon from "./HPImages/twitter.svg";
import DiscordIcon from "./HPImages/discord.svg";
import OMIcon from "./HPImages/OMLogo.png";
import { Link } from 'react-router-dom';
import 'intersection-observer';

function Gallery() {

  const [activeData, setActiveData] = useState(parsedData.slice(0, 100)); // Only show the first 100 grids by default
  const [realData, setrealData] = useState();
  const lastGridCellRef = useRef(null);
  const lastMoonbirdsIndexRef = useRef(null);

  const handlePunksClick = () => {
    setActiveData(parsedData.slice(0, 100));
    setrealData(parsedData);
    lastMoonbirdsIndexRef.current = null;
    window.location.reload();
  };
  
  const handleMoonbirdsClick = () => {
    setActiveData(moonBirdsData.slice(0, 100));
    setrealData(moonBirdsData);
    setSelectedFilters({
      Background: new Set(),
      Body: new Set(),
      Eyes: new Set(),
      Mouth: new Set(),
      Beak: new Set(),
      Eyewear: new Set(),
      Headwear: new Set(),
      Outerwear: new Set(),
    });
    setFilterOptionExpanded({
      Background: false,
      Body: false,
      Eyes: false,
      Mouth: false,
      Beak: false,
      Eyewear: false,
      Headwear: false,
      Outerwear: false,
    });
    setSelectedFilters(moonBirdsFilterOptions);
  
    // Append a timestamp to the image URLs to force the browser to fetch the updated images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      const src = img.dataset.src;
      img.dataset.src = `${src}?t=${Date.now()}`;
    });
  };
  

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
    Background: new Set(),
    Body: new Set(),
    Eyes: new Set(),
    Mouth: new Set(),
    Beak: new Set(),
    Eyewear: new Set(),
    Headwear: new Set(),
    Outerwear: new Set(),
  };

  const moonBirdsFilterOptions = {
    Background: new Set(),
    Body: new Set(),
    Eyes: new Set(),
    Mouth: new Set(),
    Beak: new Set(),
    Eyewear: new Set(),
    Headwear: new Set(),
    Outerwear: new Set(),
  };  
  
  activeData.forEach(row => {
    Object.keys(filterOptions).forEach(option => {
      if (row[option]) { // Only add the option to the set if it exists in the data
        filterOptions[option].add(row[option]);
      }
    });
  });  

  // State to keep track of which filter options are currently selected
  const [selectedFilters, setSelectedFilters] = useState({
    Background: new Set(),
    Body: new Set(),
    Eyes: new Set(),
    Mouth: new Set(),
    Beak: new Set(),
    Eyewear: new Set(),
    Headwear: new Set(),
    Outerwear: new Set(),
  });

  // State to keep track of whether each filter option is currently expanded or collapsed
  const [filterOptionExpanded, setFilterOptionExpanded] = useState({
    Background: false,
    Body: false,
    Eyes: false,
    Mouth: false,
    Beak: false,
    Eyewear: false,
    Headwear: false,
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
 const [sortOrder, setSortOrder] = useState("asset");

 const handleSortOrderChange = () => {
   if (sortOrder === "asset") {
     setActiveData(activeData.slice().sort((a, b) => a.Rarity - b.Rarity || a['Asset #'] - b['Asset #']));
     setSortOrder("rarity");
   } else {
     setActiveData(activeData.slice().sort((a, b) => a['Asset #'] - b['Asset #']));
     setSortOrder("asset");
   }
 };

 useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      observer.observe(img);
    });
  }, []);


  // Update the useEffect() hook to use the Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (realData === moonBirdsData) {
            // Load more data if there is any remaining to be displayed
            if (activeData.length < moonBirdsData.length) {
              setActiveData(prevData => [
                ...prevData,
                ...moonBirdsData.slice(prevData.length, prevData.length + 100),
              ]);
            } else {
              lastMoonbirdsIndexRef.current = activeData.length - 1;
            }
          } else if (realData === parsedData) {
            // Load more data if there is any remaining to be displayed
            if (activeData.length < parsedData.length) {
              setActiveData(parsedData.slice(0, 100));
            }
          }          
        }
      },
      { threshold: 1 }
    );
  
    // Observe the last grid cell ref
    if (lastGridCellRef.current) {
      observer.observe(lastGridCellRef.current);
    }
  
    // Cleanup the observer when the component unmounts
    return () => {
      if (lastGridCellRef.current) {
        observer.unobserve(lastGridCellRef.current);
      }
    };
  }, [activeData, realData]);  

  useEffect(() => {
    return () => {
      if (lastMoonbirdsIndexRef.current !== null) {
        setActiveData(prevData => prevData.slice(0, lastMoonbirdsIndexRef.current + 1));
      }
    };
  }, []);
  
  return (
    <div className="gallery">
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
                <div className="rarity-switch">
                  <span className="rarity-switch-text">Rarity Mode</span>
                  <button className="grid-header-button" onClick={handleSortOrderChange}>
                    <span>{sortOrder === "asset" ? "Off" : "On"}</span>
                  </button>
                </div>
                {Object.keys(filterOptions).map(option => {
                  const labels = [...filterOptions[option]];
                  const hasLabels = labels.length > 0;
                  return (
                    hasLabels && (
                      <div className="filter-menu-item" key={option}>
                        <div className="filter-menu-label" onClick={() => setFilterOptionExpanded(prevState => ({
                          ...prevState,
                          [option]: !prevState[option],
                        }))}>
                          <label htmlFor={`${option}-select`}>{option}</label>
                          <div className="filter-checkbox-toggle">{filterOptionExpanded[option] ? "-" : "+"}</div>
                        </div>
                        {filterOptionExpanded[option] && (
                          <div className="filter-checkboxes-list">
                            {labels.map(value => (
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
                    )
                  );
                })}
              </div>
              {/* Content for the left column goes here */}
            </div>
            <div className="right-column">
            <div className="grid-header">
              <div className="grid-header-button-container">
                <button className="grid-header-button" onClick={handlePunksClick}>
                  <span>Punks</span>
                </button>
                <button className="grid-header-button" onClick={handleMoonbirdsClick}>
                  <span>Moonbirds</span>
              </button>
              </div>
            </div>
            <div className="grid-container">
            {activeData
              .filter(row => {
                return Object.keys(selectedFilters).every(option => {
                  return selectedFilters[option].size === 0 || selectedFilters[option].has(row[option]);
                });
              })
              .sort(sortOrder === 'asset' ? (a, b) => a['Asset #'] - b['Asset #'] : (b, a) => a.Rarity - b.Rarity)
              .map((row, index) => (
                <div className="grid-cell" key={row['Asset #']} ref={index === activeData.length - 1 ? lastGridCellRef : null}>
                  <img src={row['Image']} alt={`${row['Item #']}`} key={`${realData}-${row['Item #']}`} />
                  <div className="punk-number">{`${row['Item #']}`}</div>
                  <div className="inscription-number">{`INSC. ${row['Inscription #']}`}</div>
                  <div className="punk-rarity">{`RANK ${row['Rank Value']}`}</div>
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
