import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardsPage.scss';

const CardsPage: React.FC = () => {
  const navigate = useNavigate();

  const cardItems = [
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', description: 'Improve your defense skills.' },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', description: 'Enhance your dribbling.' },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', description: 'Perfect your shooting.' },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', description: 'Master passing techniques.' },
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', description: 'Improve your defense skills.' },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', description: 'Enhance your dribbling.' },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', description: 'Perfect your shooting.' },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', description: 'Master passing techniques.' }
  ];

  const handleAddToCart = () => {
    navigate('/AddToCart');
  };

  return (
    <div className="page-container">
      <div className="cards-page">
        <h2 className="page-heading">Cards</h2>
        <div className="cards-items">
          {cardItems.map((item, index) => (
            <div className="card-item" key={index}>
              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
