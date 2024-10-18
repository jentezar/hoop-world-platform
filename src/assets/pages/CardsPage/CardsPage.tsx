import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './CardsPage.scss';

const CardsPage: React.FC = () => {
  const navigate = useNavigate();

  const cardItems = [
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', description: 'Improve your defense skills.' },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', description: 'Enhance your dribbling.' },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', description: 'Perfect your shooting.' },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', description: 'Master passing techniques.' },
    // Add more card items as needed
  ];

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="page-container">
      <div className="cards-page">
        <h2 className="page-heading">Cards</h2>
        <div className="cards-items">
          {cardItems.map((item, index) => (
            <Card 
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              onAddToCart={handleAddToCart} // Pass the handler as a prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
