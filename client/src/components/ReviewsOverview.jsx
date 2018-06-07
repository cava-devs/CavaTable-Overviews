import React from 'react';

const ReviewsOverview = (props) => (
  <div id="reviewsOverviewComponent">
    <div className="avgReviewContainer">
      <img src="./images/star-rating.png" width="70" height="30"></img>
      <span className="avgReview">4.5</span>
    </div>
    <div className="totalReviewsContainer">
      <span className="fa fa-comments"></span>
      <span className="totalReviews">333 reviews</span>
    </div>
    <div className="priceRangeContainer">
      <span className="fa fa-money"></span>
      <span className="priceRange">$30 and under</span>
    </div>
    <div className="cuisineTypeContainer">
      <span className="fa fa-cutlery"></span>
      <span className="cuisineType">Seafood</span>
    </div>
  </div>
);

export default ReviewsOverview;