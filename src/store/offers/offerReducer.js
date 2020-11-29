import {extend} from "../../utils";
import {ActionType} from "../action";
import {CITIES} from "../../consts";

const initialState = {
  city: CITIES.COLOGNE,
  hoveredOfferId: null,
  offerList: [],
  currentSort: `Popular`,
  comments: [],
  favoriteOffers: [],
  param: null,
  selectedCity: CITIES.COLOGNE,
  nearbyOffers: []
};

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOUSE_OVER:
      return extend(state, {
        hoveredOfferId: action.payload,
      });
    case ActionType.SELECT_CITY:
      return extend(state, {
        city: action.city,
      });
    case ActionType.SELECT_SORT:
      return extend(state, {
        currentSort: action.currentSort,
      });
    case ActionType.LOAD_HOTELS:
      return extend(state, {
        offerList: action.payload,
        city: action.payload[0].city.name,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        comments: action.payload,
        param: action.param,
      });
    case ActionType.GET_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
    case ActionType.GET_REVIEWS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.payload,
      });
    case ActionType.GET_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
      });
    default:
      return extend(state, {
        currentSort: initialState.currentSort,
      });
  }
};
