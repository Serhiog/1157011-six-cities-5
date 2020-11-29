import {
  ActionType,
  changeCity,
  redirectToRoute,
  getFavoriteOffers,
  updateErrorStatus,
  getOffers,
  getReviews,
  getNearbyOffers,
} from './action';

import {offers, reviews} from "../mocks/data";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeCity returns correct action`, () => {
    expect(changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for getOffers returns correct action`, () => {
    expect(getOffers(offers)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for getReviews returns correct action`, () => {
    expect(getReviews(reviews)).toEqual({
      type: ActionType.GET_REVIEWS,
      payload: reviews
    });
  });

  it(`Action creator for getNearbyOffers returns correct action`, () => {
    expect(getNearbyOffers(offers)).toEqual({
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for redirectToRoute returns correct action`, () => {
    expect(redirectToRoute(`/`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    });
  });

  it(`Action creator for getFavoriteOffers returns correct action`, () => {
    expect(getFavoriteOffers(offers)).toEqual({
      type: ActionType.GET_FAVORITE_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for updateErrorStatus returns correct action`, () => {
    expect(updateErrorStatus(true)).toEqual({
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: true
    });
  });
});
