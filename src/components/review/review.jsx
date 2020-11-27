import React from "react";
import {convertReviewDate} from "../../utils";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";

const Review = ({reviewList}) => {
  return reviewList.map((review, i) => {
    const ratingUserPercent = Math.round(review.rating) * 20;
    return (
      <li key={i} className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={review.user.avatar_url}
              width={54}
              height={54}
              alt={review.user.name + ` avatar`}
            />
          </div>
          <span className="reviews__user-name">{review.user.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: ratingUserPercent}} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{review.comment}</p>
          <time className="reviews__time" dateTime="2019-04-24">
            {convertReviewDate(review.date)}
          </time>
        </div>
      </li>
    );
  });
};

Review.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
};

export default Review;
