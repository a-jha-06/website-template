import React, { useState, useEffect } from 'react';
import banner from '../../images/banner2.jpg'; // Replace with your actual image path

function HeroBanner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle window resizing for responsiveness
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Styles change based on screen size
    const bannerStyles = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: windowWidth <= 768 ? '15vh' : '60vh', // Adjusted for better mobile view
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '10px', // Consistent padding, add space on small screens
    };

    const headingStyles = {
        fontSize: windowWidth <= 768 ? '8px' : '20px', // Dynamic font size
        marginBottom: '5px',
    };

    const paragraphStyles = {
        fontSize: windowWidth <= 768 ? '10px' : '20px', // Adjusted font size for readability
        marginBottom: '20px',
    };

    const buttonStyles = {
        padding: windowWidth <= 768 ? '2px 2px' : '10px 20px', // Adjust button size based on screen width
        fontSize: windowWidth <= 768 ? '8px' : '14px',
        backgroundColor: '#007bff', // Bootstrap primary blue
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '8px',
        transition: 'background-color 0.3s ease', // Add hover effect
    };

    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <div style={bannerStyles} className='container'>
            <h1 style={headingStyles}>Welcome to Our Website</h1>
            <p style={paragraphStyles}>Your one-stop solution for everything</p>
            <button style={buttonStyles} onClick={handleButtonClick}>
                Explore More
            </button>
        </div>
    );
}

export default HeroBanner;
