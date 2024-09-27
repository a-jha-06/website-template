import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/navbar/navbar'; // Adjusted the path
import Home from './Pages/home'; // Adjust the paths as per your folder structure
import Login from './Pages/login';
import Products from './Pages/products';
import Footer from './components/Footer/footer';

import HeroBanner from './components/Banner/banner';
import Solution from './Pages/solution';
import Community from './Pages/community';
import Resources from './Pages/resources';
import Contact from './Pages/contact';
import Register from './Pages/register';
import Pricing from './Pages/pricing';
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
          
          <Route path="/products" element={<Products/>} /> {/* lowercase path to ensure uniformity */}
          <Route path="/solution" element={<Solution/>} /> {/* lowercase path to ensure uniformity */}
          <Route path="/community" element={<Community />} /> {/* lowercase path to ensure uniformity */}
          <Route path="/resources" element={<Resources />} /> {/* lowercase path to ensure uniformity */}
          <Route path="/pricing" element={<Pricing />} /> {/* lowercase path to ensure uniformity */}

          <Route path="/contact" element={<Contact />} /> {/* lowercase path to ensure uniformity */}
          <Route path="/signin" element={<Login />} /> {/* lowercase path to ensure uniformity */}
          <Route path="/register" element={<Register />} /> {/* lowercase path to ensure uniformity */}
        </Routes>

        <Footer /> {/* Footer outside the Routes */}
      </Router>
    </div>
  );
}

export default App;
