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

export const getNearByOffers = (state) => {
  return getOffers(state).slice(0, 3);
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
  return getOffers(state).reduce((accum, offer) => {
    if (offer.city === getCurrentCity(state)) {
      accum.push(offer);
    }
    return accum;
  }, []);
};
