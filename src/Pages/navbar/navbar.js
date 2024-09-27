import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './navbar.css'; // Import the CSS file for styles
import logo from "../../images/logo.jpg"


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar container" >
            <div className="navbar-container" >

                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>

                </div>
                <div><Link to="/"><img src={logo} className="logo" alt='logo' /></Link></div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>


                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/solution">Solutions</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                    <li><Link to="/login">Register</Link></li>

                </ul>
            </div>
        </nav>




    );
}

export default Navbar;
