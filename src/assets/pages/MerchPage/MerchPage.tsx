import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MerchPage.scss';

const MerchPage: React.FC = () => {
  const navigate = useNavigate();

  const merchItems = [
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', price: 29.99 },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', price: 24.99 },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', price: 34.99 },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', price: 19.99 },
    { title: 'Defense Pack', imgSrc: '/images/defensePack.jpeg', price: 29.99 },
    { title: 'Dribbling Pack', imgSrc: '/images/dribblingPack.jpeg', price: 24.99 },
    { title: 'Shooting Pack', imgSrc: '/images/shootingPack.jpeg', price: 34.99 },
    { title: 'Passing Pack', imgSrc: '/images/passingPack.jpeg', price: 19.99 }
    // Add more merch items with prices
  ];

  const handleAddToCart = (item: any) => {
    navigate('/addToCart', { state: { ...item } }); // Pass item details to the AddToCart page
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
              <p className="item-price">${item.price.toFixed(2)}</p> {/* Display price */}
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
