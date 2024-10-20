import React from 'react';
import './CardsPage.scss';
import Card from '../../components/Card/Card';

const CardsPage: React.FC = () => {
  const cardItems = [
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', description: 'Improve your defense skills.', price: 29.99 },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', description: 'Enhance your dribbling.', price: 24.99 },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', description: 'Perfect your shooting.', price: 34.99 },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', description: 'Master passing techniques.', price: 19.99 },
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', description: 'Improve your defense skills.', price: 29.99 },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', description: 'Enhance your dribbling.', price: 24.99 },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', description: 'Perfect your shooting.', price: 34.99 },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', description: 'Master passing techniques.', price: 19.99 }
  ];

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
              price={item.price} // Pass price prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
