import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import NearbyOffer from "../nearby-offer/nearby-offer";
import {getNearByOffers} from "../../store/selectors";

const NearbyOffersList = ({nearbyOffers, handleOfferCard}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => {
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
  nearbyOffers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  handleOfferCard: PropTypes.func,
  actualOffer: PropTypes.shape(PropTypes4Offer),
};

const mapStateToProps = (state) => ({
  nearbyOffers: getNearByOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleOfferCard: (payload) =>
    dispatch(ActionCreator.handleOfferCard(payload)),
});

export {NearbyOffersList};
export default connect(mapStateToProps, mapDispatchToProps)(NearbyOffersList);
