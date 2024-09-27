import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/navbar/navbar'; // Adjust paths based on your folder structure
import Home from './Pages/home';
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
    <Router>
      <div className='container'>
        {/* Navbar and HeroBanner inside the container */}
        <Navbar />
        <HeroBanner />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Footer inside the container */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
