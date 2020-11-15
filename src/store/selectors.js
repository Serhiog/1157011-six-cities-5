import {SortingTypes, actualOfferIndex} from "../consts";
import {convertRatingToStars} from "../utils";
import {createSelector} from "reselect";

export const getOffers = (state) => {
  return state.offers.offerList;
};

export const getCurrentOffer = createSelector(getOffers, (offers) => {
  return offers.find((offer) => {
    return offer.id === actualOfferIndex;
  });
});

export const getCurrentSort = (state) => {
  return state.offers.currentSort;
};

export const getCurrentCity = (state) => {
  return state.offers.city;
};

export const getSortedOffers = createSelector(
    getOffers,
    getCurrentSort,
    (offers, currentSort) => {
      const superOffers = [...offers];
      switch (currentSort) {
        case SortingTypes.toHigh:
          return superOffers.sort((a, b) => {
            return a.price - b.price;
          });
        case SortingTypes.toLow:
          return superOffers.sort((a, b) => {
            return b.price - a.price;
          });
        case SortingTypes.popular:
          return superOffers;
        case SortingTypes.topRated:
          return superOffers.sort((a, b) => {
            return (
              +convertRatingToStars(b.rating) - +convertRatingToStars(a.rating)
            );
          });

        default:
          return superOffers;
      }
    }
);

export const getNearbyOffers = createSelector(getOffers, (offers) => {
  return offers.slice(0, 3);
});

export const getUnicOfferNames = createSelector(getOffers, (offers) => {
  return offers.reduce((unicNamesList, offer) => {
    if (offer.city) {
      unicNamesList.push(offer.city);
    }
    return [...new Set(unicNamesList)];
  }, []);
});


export const getFiltredByCityOffers = createSelector(
    getCurrentCity,
    getSortedOffers,
    (city, offers) => {
      return offers.filter((offer) => !city || offer.city === city);
    }
);
