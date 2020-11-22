
import { extend } from "../../utils";
import { ActionType } from "../action";

const initialState = {
  city: null,
  hoveredOfferId: null,
  offerList: [],
  currentSort: `Popular`,
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
        city: action.payload[0].city.name
      });
    default:
      return extend(state, {
        currentSort: initialState.currentSort,
      });
  }
};