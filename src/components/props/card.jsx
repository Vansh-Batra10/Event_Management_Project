
import React from 'react';

const Card = ({ title, imageSrc, message }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" />
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default Card;
