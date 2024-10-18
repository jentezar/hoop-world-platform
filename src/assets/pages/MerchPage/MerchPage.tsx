import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MerchPage.scss';

const MerchPage: React.FC = () => {
  const navigate = useNavigate();

  const merchItems = [
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg' },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg' },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg' },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg'},
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg' },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg' },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg' },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg'}
    // Add more merch items with appropriate image paths
  ];

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="page-container">
      <div className="merch-page">
        <h2 className="page-heading">Merchandise</h2>
        <div className="merch-items">
          {merchItems.map((item, index) => (
            <div className="merch-item" key={index}>
              <img src={item.imgSrc} alt={item.title} className="item-image" />
              <h3>{item.title}</h3>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
