import React from 'react';
import Card from '../../components/Card/Card';

const MerchPage: React.FC = () => {
  const merchItems = [
    {
      imgSrc: '/images/hoopworld-tee.jpeg',
      title: 'HoopWorld Tee',
      description: 'Comfortable and stylish t-shirt for fans.',
    },
    {
      imgSrc: '/images/hoopworld-cap.jpeg',
      title: 'HoopWorld Cap',
      description: 'Keep the sun out with our branded cap.',
    },
    // Add more merch items
  ];

  return (
    <div className="page-container">
      <div className="merch-page">
        <h2 className="featured-heading">Merchandise</h2>
        <div className="merch-items">
          {merchItems.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
