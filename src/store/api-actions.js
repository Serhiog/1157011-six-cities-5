import {
  loadHotels,
  loadReviews,
  requireAuthorization,
  getFavoriteOffers,
  getReviews,
  updateErrorStatus
} from "./action";
import history from "../browser-history";

export const fetchHotelsList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({data}) => dispatch(loadHotels(data)));

export const fetchHotelReviews = (id) => (dispatch, _getState, api) =>
  api.get(`/comments/${id}`).then(({data}) => {
    return dispatch(loadReviews(data));
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(({data}) => dispatch(requireAuthorization(`AUTH`, data)))
    .catch(() => {});

export const login = ({email, password}) => (dispatch, _getState, api) =>
  api.post(`/login`, {email, password}).then(({}) => {
    dispatch(requireAuthorization(`AUTH`));
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
