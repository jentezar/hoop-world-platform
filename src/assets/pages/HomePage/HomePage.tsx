import React from 'react';
import Carousel from '../../components/Carousel/Carousel';



const HomePage: React.FC = () => {
    const featuredCards = [
        {
          imgSrc: '/images/dribblingPack.jpeg',
          title: 'Dribble Mastery',
          description: 'Improve your ball handling with expert drills.',
        },
        {
          imgSrc: '/images/shootingPack.jpeg',
          title: 'Shooting Perfection',
          description: 'Sharpen your shooting accuracy and consistency.',
        },
        {
          imgSrc: '/images/defensePack.jpeg',
          title: 'Defense Mastery',
          description: 'Enhance your defensive skills and strategies.',
        },
        {
          imgSrc: '/images/passingPack.jpeg',
          title: 'Passing Perfection',
          description: 'Perfect your passes and vision on the court.',
        },
      ];
      

  return (
    <div>
        <h2 className="featured-heading">Featured Training Cards</h2>
        <Carousel cards={featuredCards} />
    </div>
  );
};

export default HomePage;
