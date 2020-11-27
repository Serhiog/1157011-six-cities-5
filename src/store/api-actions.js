import {
  loadHotels,
  loadReviews,
  requireAuthorization,
  getFavoriteOffers,
  getReviews,
  updateErrorStatus,
  getNearbyOffers,
} from "./action";
import history from "../browser-history";

export const fetchHotelsList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({data}) => dispatch(loadHotels(data)));

export const fetchHotelReviews = (id, param) => (dispatch, _getState, api) =>
  api.get(`/comments/${id}`).then(({data}) => {
    return dispatch(loadReviews(data, param));
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(({data}) => dispatch(requireAuthorization(`AUTH`, data.email)))
    .catch(() => {});

export const login = ({email, password}) => (dispatch, _getState, api) =>
  api.post(`/login`, {email, password}).then(({data}) => {
    dispatch(requireAuthorization(`AUTH`, data.email));
    history.push(`/`);
  });

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => {
  return api.get(`/favorite`).then(({data}) => dispatch(getFavoriteOffers(data)));
};

export const changeFavorite = (offerId, status) => (
    dispatch,
    _getState,
    api
) => {
  return api.post(`/favorite/${offerId}/${status}`).then(() => {
    dispatch(fetchHotelsList());
    dispatch(fetchFavoriteOffersList());
  });
};

export const sendReview = ({comment, rating}, offerId) => (dispatch, _getState, api) => {
  return api.post(`/comments/${offerId}`, {comment, rating})
  .then(({data}) => dispatch(getReviews(data)))
  .catch((err) => {
    dispatch(updateErrorStatus(true));
    throw err;
  });
};

export const fetchNearbyOffersList = (offerId) => (dispatch, _getState, api) => {
  return api.get(`/hotels/${offerId}/nearby`)
    .then(({data}) => dispatch(getNearbyOffers(data)));
};
