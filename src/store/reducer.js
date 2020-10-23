import Offers from "../mocks/offers";
import { extend } from "../utils";
import { ActionType } from "../store/action";

const initialState = {
  city: `Moscow`,
  activeCardId: null,
  offerList: Offers,
  comment: ``,
  rating: 0,
  blockSendBtn: true,
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

export { reducer };
