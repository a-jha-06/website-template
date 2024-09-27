import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/navbar/navbar'; // Adjusted the path
import Home from './Pages/home'; // Adjust the paths as per your folder structure
import Login from './Pages/login';
import Products from './Pages/Products';
import Footer from './components/Footer';

import HeroBanner from './components/Banner';
function App() {
  return (
    <div >
      <Router>
        <div className='container'>
          <Navbar />
          <HeroBanner />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> {/* lowercase path to ensure uniformity */}
          <Route path="/products" element={<Products />} /> {/* lowercase path to ensure uniformity */}
        </Routes>

        <Footer /> {/* Footer outside the Routes */}
      </Router>
    </div>
  );
}

export default App;
