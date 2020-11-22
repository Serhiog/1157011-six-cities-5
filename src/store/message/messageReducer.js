import {extend} from "../../utils";
import {ActionType} from "../action";

const initialState = {
  comment: ``,
  rating: 0,
  blockSendBtn: true,
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHECKING_COMMENT:
      return extend(state, {
        blockSendBtn: action.messageLength,
      });
    case ActionType.SEND_COMMENT:
      return extend(state, {
        rating: action.rating,
        comment: action.comment,
      });
    default:
      return state;
  }
};
