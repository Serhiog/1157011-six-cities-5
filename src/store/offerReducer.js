import Offers from "../mocks/offers";
import {extend} from "../utils";
import {ActionType} from "./action";
import {cities} from "../consts";

const initialState = {
  city: null,
  payload: null,
  offerList: Offers,
  unicCities: cities,
  currentSort: `Popular`,
};

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOUSE_OVER:
      return extend(state, {
        payload: action.payload,
      });
    case ActionType.SELECT_CITY:
      return extend(state, {
        city: action.city,
      });
    case ActionType.SELECT_SORT:
      return extend(state, {
        currentSort: action.currentSort,
      });
    default:
      return extend(state, {
        currentSort: initialState.currentSort,
      });
  }
};
