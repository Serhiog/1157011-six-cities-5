import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  userStatus: false,
};

export const userStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGGED:
      return extend(state, {
        userStatus: action.status,
      });
    default:
      return extend(state, {
        userStatus: false,
      });
  }
};
