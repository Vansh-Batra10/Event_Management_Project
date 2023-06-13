import React, { useState } from 'react';

const CarouselSuccess = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (cards.length));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cards.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="success-carousel-container">
      <div
        className="success-carousel-slider"
        style={{
          transform: `translateX(-${currentSlide * (100 / 2)}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div className={`success-slide ${index === currentSlide ? 'active' : ''}`} key={index}>
            <h1>{card.title}</h1>
            <img src={card.img} alt={card.title} />
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <button className="success-arrow-button success-left" onClick={prevSlide}>
        &larr;
      </button>
      <button className="success-arrow-button success-right" onClick={nextSlide}>
        &rarr;
      </button>
    </div>
  );
};

export default CarouselSuccess;
