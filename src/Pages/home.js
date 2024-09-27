import React from 'react';
import DualImage from '../Components/Dual image card'; // Adjust the import path as necessary
import Cards from '../Components/project-cards/cards'; // Adjust the import path as necessary
import image1 from '../images/logo.jpg'; // Replace with your actual image paths
import image2 from '../images/logo2.jpg'; // Replace with your actual image paths

const home = () => {
    return (
        <div className='container'>

            <div>
                <h4 className='header'>Welcome to the Dual Image Component</h4>
                <DualImage
                    image1={image1}
                    image2={image2}
                    caption1="Caption for Image 1"
                    caption2="Caption for Image 2"
                />
            </div>

            <div>
                <Cards />
            </div>
        </div>

    );
};

export default home;
