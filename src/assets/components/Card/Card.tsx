import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss'; // Make sure to include this in your project

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/AddToCart');
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img src={imgSrc} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
