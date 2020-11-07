import React from "react";
import SendComment from "../send-comment/send-comment";
import Review from "../review/review";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";

const ReviewList = ({offer}) => {

  const reviews = offer.reviews;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews&nbsp;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        <Review reviewList={reviews}/>
      </ul>
      <SendComment />
    </section>
  );
};

ReviewList.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
};

export default ReviewList;
