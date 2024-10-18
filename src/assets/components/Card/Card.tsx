import React from 'react';
import './Card.scss';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
