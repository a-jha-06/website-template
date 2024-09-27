import React from 'react';
import './dual-image.css'; // Import your CSS file for styles

const DualImage = ({ image1, image2, caption1, caption2 }) => {
    return (
        <div className='container'>
            <div className="dual-image-container">
                <div className="image-wrapper">
                    <img src={image1} className="image" />
                    {caption1 && <p className="caption">{caption1}</p>}
                </div>
                <div className="image-wrapper">
                    <img src={image2} className="image" />
                    {caption2 && <p className="caption">{caption2}</p>}
                </div>
            </div>
        </div>
        
    );
};

export default DualImage;
