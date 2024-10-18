import React from 'react';
import './Card.scss';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  onAddToCart: () => void; // Add the onAddToCart prop for handling button clicks
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, onAddToCart }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onAddToCart}>Add to Cart</button> {/* Add the button inside the Card */}
    </div>
  );
};

export default Card;
