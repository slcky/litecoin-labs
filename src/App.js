import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './HomePage.js';
import Gallery from './Gallery.js';

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
