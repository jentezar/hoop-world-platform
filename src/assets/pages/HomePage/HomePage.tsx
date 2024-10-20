import React from 'react';
import Carousel from '../../components/Carousel/Carousel';



const HomePage: React.FC = () => {
    const featuredCards = [
        {
          imgSrc: '/images/dribblingPack.jpeg',
          title: 'Dribble Mastery',
          description: 'Improve your ball handling with expert drills.',
          price: 33.99
        },
        {
          imgSrc: '/images/shootingPack.jpeg',
          title: 'Shooting Perfection',
          description: 'Sharpen your shooting accuracy and consistency.',
          price: 33.99
        },
        {
          imgSrc: '/images/defensePack.jpeg',
          title: 'Defense Mastery',
          description: 'Enhance your defensive skills and strategies.',
          price: 33.99
        },
        {
          imgSrc: '/images/passingPack.jpeg',
          title: 'Passing Perfection',
          description: 'Perfect your passes and vision on the court.',
          price: 33.99
        },
        {
          imgSrc: '/images/dribblingPack.jpeg',
          title: 'Dribble Mastery',
          description: 'Improve your ball handling with expert drills.',
          price: 33.99
        },
        {
          imgSrc: '/images/shootingPack.jpeg',
          title: 'Shooting Perfection',
          description: 'Sharpen your shooting accuracy and consistency.',
          price: 33.99
        },
        {
          imgSrc: '/images/defensePack.jpeg',
          title: 'Defense Mastery',
          description: 'Enhance your defensive skills and strategies.',
          price: 33.99
        },
        {
          imgSrc: '/images/passingPack.jpeg',
          title: 'Passing Perfection',
          description: 'Perfect your passes and vision on the court.',
          price: 33.99
        },
      ];

      
      

  return (
    <div>
        <h2 className="featured-heading">Featured Training Cards</h2>
        <Carousel cards={featuredCards} />
        <h3 className="featured-heading">Are you a Coach?</h3>
        <p className="featured-paragraph">Looking to create your own custom cards with your very own specialized drills or play? Fill out the form
        below and we will get back to you as quick as possible.</p>
    </div>
  );
};

export default HomePage;
