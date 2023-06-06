import React from "react";

const RatingStars = ({ rating }) => {
  const starCount = 5; // Total number of stars

  // Calculate the width of the filled stars
  const filledStarsWidth = (rating / starCount) * 100;

  // Calculate the width of the partially filled star
  const decimalWidth = (rating % 1) * 100;

  // Create an array of star elements
  const stars = Array.from({ length: starCount }, (_, index) => {
    if (index < Math.floor(rating)) {
      return <span key={index} className="star filled">&#9733;</span>;
    } else if (index === Math.floor(rating) && decimalWidth > 0) {
      return (
        <span key={index} className="star">
          <span
            className="star-half-filled"
            style={{ width: `${decimalWidth}%` }}
          >
            &#9733;
          </span>
        </span>
      );
    } else {
      return <span key={index} className="star">&#9734;</span>;
    }
  });

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStars;
