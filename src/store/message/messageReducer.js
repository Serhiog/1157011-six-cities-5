import {extend} from "../../utils";
import {ActionType} from "../action";

const initialState = {
  comment: ``,
  rating: ``,
  blockSendBtn: true,
  isErrorToSubmit: false,
  offers: [],
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
        comment: action.payload,
      });
    case ActionType.UPDATE_ERROR_STATUS:
      return extend(state, {
        isErrorToSubmit: action.payload,
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.RESET_COMMENT:
      return extend(state, {
        rating: action.payload.defaultData.rating,
        comment: action.payload.defaultData.review,
      });
    default:
      return state;
  }
};
