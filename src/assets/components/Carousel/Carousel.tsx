import React from 'react';
import './Carousel.scss';
import Card from '../Card/Card';

interface CarouselProps {
  cards: Array<{
    imgSrc: string;
    title: string;
    description: string;
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
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentSlide * 101}%)` }}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
