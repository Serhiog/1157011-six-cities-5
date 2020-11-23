import {loadHotels, loadReviews} from "./action";
// import {AuthorizationStatus} from "../const";
// import {AppRoute, APIRoute} from "../const";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotels(data)))
);

export const fetchHotelReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

// export const checkAuth = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.LOGIN)
//     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
//     .catch(() => {})
// );

// export const login = ({login: email, password}) => (dispatch, _getState, api) => (
//   api.post(APIRoute.LOGIN, {email, password})
//     .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
//     .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
// );
