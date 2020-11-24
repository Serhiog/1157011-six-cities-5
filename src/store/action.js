import {MaxLengthMessage} from "../consts";
import {SortingTypes} from "../consts";

export const ActionType = {
  MOUSE_OVER: `MOUSE_OVER`,
  SEND_COMMENT: `SEND_COMMENT`,
  CHECKING_COMMENT: `CHECKING_COMMENT`,
  SELECT_CITY: `SELECT_CITY`,
  SELECT_SORT: `SELECT_SORT`,
  LOAD_HOTELS: `LOAD_HOTELS`,
  USER_LOGGED: `USER_LOGGED`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_EMAIL: `SET_USER_EMAIL`,
  GET_FAVORITE_OFFERS: `GET_FAVORITE_OFFERS`,
};

export const ActionCreator = {
  handleOfferCard: (payload) => ({
    type: ActionType.MOUSE_OVER,
    payload,
  }),
  handleFormSubmit: (data) => {
    return {
      type: ActionType.SEND_COMMENT,
      comment: data.get(`review`),
      rating: data.get(`rating`),
    };
  },
  handleLengthMessage: (messageLength) => {
    return {
      type: ActionType.CHECKING_COMMENT,
      messageLength: messageLength < MaxLengthMessage,
    };
  },
  handleCity: (city) => {
    return {
      type: ActionType.SELECT_CITY,
      city,
    };
  },
  handleSorting: (currentSort = SortingTypes.popular) => {
    return {
      type: ActionType.SELECT_SORT,
      currentSort,
    };
  },
};

export const loadHotels = (hotels) => ({
  type: ActionType.LOAD_HOTELS,
  payload: hotels,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const requireAuthorization = (status, data) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
  email: data.email,
});

export const getFavoriteOffers = (offers) => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: offers,
});
