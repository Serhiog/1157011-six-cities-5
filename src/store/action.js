import {MaxLengthMessage} from "../consts";
import Offers from "../mocks/offers";

export const ActionType = {
  MOUSE_OVER: `MOUSE_OVER`,
  SEND_COMMENT: `SEND_COMMENT`,
  CHECKING_COMMENT: `CHECKING_COMMENT`,
  SELECT_CITY: `SELECT_CITY`,
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
  handleCity: (evt) => {
    const city = evt.target.closest(`.locations__item-link`).dataset.city;
    return {
      type: ActionType.SELECT_CITY,
      city,
      offerList: Offers.filter((offer) => {
        return offer.city === city;
      }),
    };
  },
};
