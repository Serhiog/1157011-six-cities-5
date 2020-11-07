import React from "react";
import PropTypes from "prop-types";
import {PropTypes4Offer} from "../../propConsts";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import SelectSort from "../select-sort/select-sort";
import {getFiltredByCityOffers, getCurrentCity} from "../../store/selectors";

const OfferList = ({offers, handleOfferCard, city}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} places to stay in {city}
      </b>
      <SelectSort />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            handleOfferCard={handleOfferCard}
            offerId={offer.id}
            classNameArticle={`cities__place-card`}
            classNameImageWrapper={`cities__image-wrapper`}
          />
        ))}
      </div>
    </section>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(PropTypes4Offer)),
  handleOfferCard: PropTypes.func,
  city: PropTypes.string,
};

const mapToStateProps = (state) => ({
  city: getCurrentCity(state),
  offers: getFiltredByCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleOfferCard(payload) {
    dispatch(ActionCreator.handleOfferCard(payload));
  },
});

export {OfferList};
export default connect(mapToStateProps, mapDispatchToProps)(OfferList);
