import React from "react";
import PropTypes from "prop-types";
import { PropTypes4Offer } from "../../propConsts";
import OfferCard from "../offer-card/offer-card";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/action";
import SelectSort from "../select-sort/select-sort";
import {
  getFiltredByCityOffers,
  getCurrentCity,
} from "../../store/offers/selectors";

const OfferList = ({
  offers,
  handleOfferCard,
  city,
  classList,
  classCard,
  classImageWrapper,
  forFavorites,
  nearby,
}) => {
  return (
    <section
      style={{ width: `${nearby ? `auto` : ``}` }}
      className="cities__places places"
    >
      {forFavorites ? (
        ``
      ) : (
        <React.Fragment>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {city}
          </b>
          <SelectSort />
        </React.Fragment>
      )}

      <div
        className={`${classList} ${
          classList !== `favorites__places` ? `places__list` : ``
        }`}
      >
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            offerId={offer.id}
            classCard={classCard}
            classImageWrapper={classImageWrapper}
            forFavorites={forFavorites}
            nearby={true}
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
  classList: PropTypes.string.isRequired,
  classCard: PropTypes.string.isRequired,
  classImageWrapper: PropTypes.string.isRequired,
  forFavorites: PropTypes.bool,
};

const mapToStateProps = (state) => ({
  city: getCurrentCity(state),
  // offers: getFiltredByCityOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleOfferCard(payload) {
    dispatch(ActionCreator.handleOfferCard(payload));
  },
});

export { OfferList };
export default connect(mapToStateProps, mapDispatchToProps)(OfferList);
