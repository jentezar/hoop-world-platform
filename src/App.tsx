import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage/HomePage';
import MerchPage from './assets/pages/MerchPage/MerchPage';
import CommunityPage from './assets/pages/CommunityPage/CommunityPage';
import DrillsPage from './assets/pages/DrillsPage/DrillsPage';
import CardsPage from './assets/pages/CardsPage/CardsPage';
import Navbar from './assets/components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/drills" element={<DrillsPage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </>
  );
}

export default App;
