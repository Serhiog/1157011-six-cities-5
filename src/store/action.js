import {MAX_LENGTH_MESSAGE} from "../consts";
import {SortingTypes} from "../consts";

export const ActionType = {
  MOUSE_OVER: `MOUSE_OVER`,
  SEND_COMMENT: `SEND_COMMENT`,
  CHECKING_COMMENT: `CHECKING_COMMENT`,
  SELECT_CITY: `SELECT_CITY`,
  SELECT_SORT: `SELECT_SORT`,
  LOAD_HOTELS: `LOAD_HOTELS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_EMAIL: `SET_USER_EMAIL`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  GET_REVIEWS: `GET_REVIEWS`,
  RESET_COMMENT: `RESET_COMMENT`,
  UPDATE_ERROR_STATUS: `UPDATE_ERROR_STATUS`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_NEARBY_OFFERS: `GET_NEARBY_OFFERS`
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const ActionCreator = {
  handleOfferCard: (payload) => ({
    type: ActionType.MOUSE_OVER,
    payload,
  }),
  handleFormSubmit: (comment, rating) => {
    return {
      type: ActionType.SEND_COMMENT,
      payload: comment, rating,
    };
  },
  handleLengthMessage: (messageLength) => {
    return {
      type: ActionType.CHECKING_COMMENT,
      messageLength: messageLength < MAX_LENGTH_MESSAGE,
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

export const loadReviews = (reviews, param) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
  param,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const requireAuthorization = (status, email) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
  email,
});

export const getFavoriteOffers = (offers) => ({
  type: ActionType.ADD_TO_FAVORITES,
  payload: offers,
});

export const updateErrorStatus = (answer) => ({
  type: ActionType.UPDATE_ERROR_STATUS,
  payload: answer,
});

export const getOffers = (offers) => ({
  type: ActionType.GET_OFFERS,
  payload: offers,
});

export const getReviews = (reviews) => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews,
});

export const resetReview = (defaultData) => ({
  type: ActionType.RESET_COMMENT,
  payload: defaultData,
});

export const getNearbyOffers = (offers) => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: offers,
});

