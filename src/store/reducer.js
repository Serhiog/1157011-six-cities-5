import Offers from "../mocks/offers";
import {extend} from "../utils";
import {ActionType} from "../store/action";
import {cities} from "../consts";

const initialState = {
  comment: ``,
  rating: 0,
  blockSendBtn: true,
  city: null,
  payload: null,
  offerList: Offers,
  unicCities: cities,
  currentSort: `Popular`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOUSE_OVER:
      return extend(state, {
        payload: action.payload,
      });
    case ActionType.CHECKING_COMMENT:
      return extend(state, {
        blockSendBtn: action.messageLength,
      });
    case ActionType.SEND_COMMENT:
      return extend(state, {
        rating: action.rating,
        comment: action.comment,
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

export {reducer};
