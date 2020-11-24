import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  offers: null,
};

export const backendReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return extend(state, {
        offers: action.payload,
      });
    default:
      return extend(state, {
        offers: initialState.offers,
      });
  }
};
