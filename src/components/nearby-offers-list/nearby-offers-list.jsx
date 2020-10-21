import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import NearbyOffer from "../nearby-offer/nearby-offer";
import withMouseOverActiveCard from "../../hocs/mouse-over-active-card";

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
};

export default withMouseOverActiveCard(NearbyOffersList);
