import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import NearbyOffer from "../nearby-offer/nearby-offer";

const NearbyOffersList = ({offers, handleOfferCard}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => {
          return (
            <NearbyOffer
              key={offer.id}
              offer={offer}
              handleOfferCard={handleOfferCard}
            />
          );
        })}
      </div>
    </section>
  );
};

NearbyOffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  handleOfferCard: PropTypes.func,
  actualOffer: PropTypes.shape(PropTypes4Offer),
};

const mapDispatchToProps = (dispatch) => ({
  handleOfferCard: (payload) =>
    dispatch(ActionCreator.handleOfferCard(payload)),
});

export {NearbyOffersList};
export default connect(null, mapDispatchToProps)(NearbyOffersList);
