import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './HomePage.js';
import Gallery from './Gallery.js';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
