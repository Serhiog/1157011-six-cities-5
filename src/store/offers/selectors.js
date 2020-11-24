import {SortingTypes, actualOfferIndex} from "../../consts";
import {createSelector} from "reselect";
import uniqBy from "lodash/uniqBy";

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
            return b.rating - a.rating;
          });

        default:
          return superOffers;
      }
    }
);

export const getNearbyOffers = createSelector(getOffers, (offers) => {
  return offers.slice(0, 3);
});

export const getUnicCities = createSelector(getOffers, (offers) => {
  if (!offers.length) {
    return [];
  }
  return offers.reduce((list, offer) => {
    if (offer.city) {
      list.push(offer.city);
    }
    return uniqBy(list, `name`);
  }, []);
});

export const getSelectedCity = createSelector(getUnicCities, getCurrentCity, (cities, cityName) => {
  return cities.find((city) => {
    return cityName === city.name;
  });
});

export const getUnicCityNames = createSelector(getUnicCities, (cities) => {
  return cities.map((city) => {
    return city.name;
  });
});

export const getFiltredByCityOffers = createSelector(
    getCurrentCity,
    getSortedOffers,
    (city, offers) => {
      return offers.filter((offer) => !city || offer.city.name === city);
    }
);

export const checkFavorite = (active) => active ? 1 : 0;

export const getWidthIconFavorite = (classCard) => classCard === `place-card` ? `18` : `31`;
export const getHeightIconFavorite = (classCard) => classCard === `place-card` ? `19` : `33`;
