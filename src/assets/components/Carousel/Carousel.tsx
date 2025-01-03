import React from 'react';
import './Carousel.scss';
import Card from '../Card/Card';

interface CarouselProps {
  cards: Array<{
    imgSrc: string;
    title: string;
    description: string;
    price: number; // Include price in the props
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = Math.ceil(cards.length / 2); // Showing 2 cards at a time

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-track">
        {cards.map((card, index) => (
          <Card 
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            price={card.price} // Explicitly pass price prop
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
