
import React from 'react';

const Card = ({ title, img ,price,capacity }) => {
  // const imgsrc=img[0];
  return (
    <div className="card">
     <h3 className='card-title'>{title}</h3>
      <img src={img} alt="Card" className='card-image'/>
      <div className='card-details'>
        <p>Price: {price}</p>
        <p>Capacity: {capacity}</p>
      </div>
    </div>
  );
};

export default Card;