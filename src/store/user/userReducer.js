import {extend} from "../../utils";
import {ActionType} from "../action";

const initialState = {
  authorizationStatus: `NO_AUTH`,
  email: null,
};

export const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
        email: action.email,
      });
    default:
      return state;
  }
};
