import React from "react";
import SendComment from "../send-comment/send-comment";
import Review from "../review/review";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";

const ReviewList = ({offers}) => {

  const getReviews = () => {
    return offers.reduce((offerList, offer) => {
      offerList.push(offer.reviews);
      return [].concat.apply([], offerList);
    }, []);
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews&nbsp;
        <span className="reviews__amount">{getReviews(offers).length}</span>
      </h2>
      <ul className="reviews__list">
        <Review reviewList={getReviews(offers)}/>
      </ul>
      <SendComment />
    </section>
  );
};

ReviewList.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer))
};

export default ReviewList;
