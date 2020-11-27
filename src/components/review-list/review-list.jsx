import React from "react";
import SendComment from "../send-comment/send-comment";
import Review from "../review/review";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import {AuthorizationStatus} from "../../consts";
import {connect} from "react-redux";

const ReviewList = ({reviews, authorizationStatus}) => {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews&nbsp;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        <Review reviewList={reviews} />
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH ? <SendComment /> : ``}
    </section>
  );
};

ReviewList.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
};

const mapToStateProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
});

export {ReviewList};
export default connect(mapToStateProps)(ReviewList);
