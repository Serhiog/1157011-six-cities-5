import {SortingTypes, actualOfferIndex} from "../consts";
import {convertRatingToStars} from "../utils";

export const getOffers = (state) => {
  return state.offers.offerList;
};

export const getCurrentOffer = (state) => {
  return getOffers(state).find((offer) => {
    return offer.id === actualOfferIndex;
  });
};

export const getCurrentSort = (state) => {
  return state.offers.currentSort;
};

export const getCurrentCity = (state) => {
  return state.offers.city;
};

export const getSortedOffers = (state) => {
  const sortedOffers = [...getOffers(state)];
  switch (getCurrentSort(state)) {
    case SortingTypes.toHigh:
      return sortedOffers.sort((a, b) => {
        return a.price - b.price;
      });
    case SortingTypes.toLow:
      return sortedOffers.sort((a, b) => {
        return b.price - a.price;
      });
    case SortingTypes.popular:
      return sortedOffers;
    case SortingTypes.topRated:
      return sortedOffers.sort((a, b) => {
        return (
          +convertRatingToStars(b.rating) - +convertRatingToStars(a.rating)
        );
      });

    default:
      return sortedOffers;
  }
};

export const getNearbyOffers = (state) => {
  // const checkedOffer = state.offers.hoveredOfferId;
  // const excludeElement = [...getOffers(state).slice(checkedOffer, getOffers(state).length)];
  const excludeElementd = getOffers(state).slice(0, 3);
  return excludeElementd;
};

export const getUnicOfferNames = (state) => {
  return getOffers(state).reduce((unicNamesList, offer) => {
    if (offer.city) {
      unicNamesList.push(offer.city);
    }
    return [...new Set(unicNamesList)];
  }, []);
};

export const getFiltredByCityOffers = (state) => {
  const currentCity = getCurrentCity(state);
  return getSortedOffers(state).filter(
      (offer) => !currentCity || offer.city === currentCity
  );
};
