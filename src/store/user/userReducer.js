import { extend } from "../../utils";
import { ActionType } from "../action";

const initialState = {
  authorizationStatus: `NO_AUTH`,
};

export const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGGED:
      return extend(state, {
        authorizationStatus: action.status,
      });
    default:
      return extend(state, {
        authorizationStatus: `NO_AUTH`,
      });
  }
};
