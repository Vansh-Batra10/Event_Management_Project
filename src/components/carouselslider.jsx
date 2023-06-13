// CarouselSlider.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './props/card.jsx';

const CarouselSlider = ({ cards, visibleCards ,category,subcategory}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = Math.ceil(cards.length / visibleCards);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel-slider">
      <button className="arrow-button left" onClick={prevSlide}>
        &larr;
      </button>
      <div
        className="card-container"
        style={{
          "--slide-offset": currentSlide * visibleCards,
          "--visible-cards": visibleCards,
          "--total-slides": totalSlides,
        }}
      >
        {cards.map((card, index) => {
          const cardIndex = index % cards.length;
          const slideIndex = index % totalSlides;
          const slideOffset = currentSlide;
          const isActive =
            slideIndex >= slideOffset && slideIndex < slideOffset + visibleCards;

          return (
            <div
              key={cardIndex}
              className={`slide ${isActive ? "active" : ""}`}
            >
              <Link to={`/${category}/${subcategory}/${card.id}`}>
                <Card
                  title={card.title}
                  img={card.img[1]}
                  price={card.price}
                  capacity={card.capacity}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <button className="arrow-button right" onClick={nextSlide}>
        &rarr;
      </button>
    </div>
  );
};

export default CarouselSlider;
