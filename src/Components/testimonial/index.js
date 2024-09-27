import React from 'react';
import './testimonial.css'; // Create a CSS file for styling

const quotesData = [
  {
    quote: 'Quote',
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/50', // Placeholder image
  },
  {
    quote: 'Quote',
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    quote: 'Quote',
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    quote: 'Quote',
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    quote: 'Quote',
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    quote: 'Quote',
    title: 'Title',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

// Quote Card Component
const QuoteCard = ({ quote, title, description, imageUrl }) => {
  return (
    <div className="quote-card">
      <p className="quote">"{quote}"</p>
      <div className="quote-details">
        <img src={imageUrl} alt={title} className="quote-image" />
        <div className="quote-text">
          <h4 className="quote-title">{title}</h4>
          <p className="quote-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Main Component with Grid
const Testimonial = () => {
  return (
    <div className="quotes-container">
      <h1 className="main-heading">Heading</h1>
      <p className="sub-heading">Subheading</p>
      <div className="quotes-grid">
        {quotesData.map((quote, index) => (
          <QuoteCard key={index} {...quote} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

