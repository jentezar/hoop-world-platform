import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: number; // Added price prop
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, price }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (event: React.MouseEvent) => {
    // Prevent click from flipping the card if it's the button
    event.stopPropagation();
    // Navigate to addToCart with item details
    navigate('/addToCart', { state: { imgSrc, title, description, price } });
  };

  const handleCardClick = () => {
    // Toggle flip state on click (for mobile)
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      {/* Conditionally add 'flipped' class based on state */}
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img src={imgSrc} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <p className="price">${price.toFixed(2)}</p> {/* Show the price */}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
