import React , { useState } from 'react';

const Review = ({ avatar, username, date, review }) => {
  return (
    <div className="review">
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
      <div className="content">
        <div className="header">
          <h4>{username}</h4>
          <p>{date}</p>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};



const ReviewsList = ({ reviews }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 5);

  return (
    <div className="reviews-container">
      <div className="reviews-list">
        {displayedReviews.map((review, index) => (
          <Review
            key={index}
            avatar={review.avatar}
            username={review.username}
            date={review.date}
            review={review.review}
          />
        ))}
      </div>
      {!showAllReviews && (
        <button className="show-more-btn" onClick={toggleReviews}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ReviewsList;

