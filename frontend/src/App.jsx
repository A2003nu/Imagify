import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyCredits from './pages/BuyCredits';
import Results from './pages/Results';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredits />} />
        <Route path="/result" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
