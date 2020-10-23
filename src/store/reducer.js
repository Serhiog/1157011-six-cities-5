import Offers from "../mocks/offers";
import {extend} from "../utils";
import {ActionType} from "../store/action";

const initialState = {
  comment: ``,
  rating: 0,
  blockSendBtn: true,
  city: `Moscow`,
  activeCardId: null,
  offerList: Offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOUSE_OVER:
      return extend(state, {
        activeCardId: action.activeCardId,
      });
    case ActionType.CHECKING_COMMENT:
      return extend(state, {
        blockSendBtn: action.messageLength,
      });
    case ActionType.SEND_COMMENT:
      return extend(state, {});
  }

  return state;
};

export {reducer};
