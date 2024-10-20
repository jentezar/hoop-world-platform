import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AddToCart.scss';

const AddToCartPage: React.FC = () => {
  const location = useLocation();
  const { imgSrc, title, description, price } = location.state; // Get item details from navigate state

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = (price * quantity).toFixed(2); // Calculate total price

  return (
    <div className="add-to-cart-page">
      <div className="item-image-container">
        <img src={imgSrc} alt={title} className="item-image" />
      </div>

      <div className="item-details">
        <h2 className="item-title">{title}</h2>
        <p className="item-description">{description}</p>
        <p className="item-price">Price: ${price.toFixed(2)}</p> {/* Show price */}
        <div className="quantity-container">
          <button className="quantity-btn" onClick={decrementQuantity}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={incrementQuantity}>+</button>
        </div>
        <p className="total-price">Total: ${totalPrice}</p> {/* Show total price */}
      </div>
    </div>
  );
};

export default AddToCartPage;
