import { MaxLengthMessage } from "../consts";

export const ActionType = {
  MOUSE_OVER: `MOUSE_OVER`,
  SEND_COMMENT: `SEND_COMMENT`,
  CHECKING_COMMENT: `CHECKING_COMMENT`,
};

export const ActionCreator = {
  handleOfferCard: (activeCardId) => ({
    type: ActionType.MOUSE_OVER,
    activeCardId,
  }),
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    return {
      type: ActionType.SEND_COMMENT,
      comment: data.get(`review`),
      rating: data.get(`rating`),
    };
  },
  handleLengthMessage: (evt) => {
    evt.preventDefault();
    return {
      type: ActionType.CHECKING_COMMENT,
      messageLength: evt.target.value.length >= MaxLengthMessage ? false : true,
    };
  },
};
