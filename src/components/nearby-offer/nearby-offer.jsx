import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import OfferCard from "../offer-card/offer-card";

const NearbyOffer = ({offer, handleOfferCard}) => {
  return (
    <OfferCard
      key={offer.id}
      offer={offer}
      handleOfferCard={handleOfferCard}
      offerId={offer.id}
      classNameArticle={`near-places__card`}
      classNameImageWrapper={`near-places__image-wrapper`}
    />
  );
};

NearbyOffer.propTypes = {
  offer: PropTypes.shape(PropTypes4Offer),
  handleOfferCard: PropTypes.func,
  offerId: PropTypes.number,
};

export default NearbyOffer;
