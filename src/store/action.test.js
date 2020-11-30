import {
  ActionType,
  changeCity,
  redirectToRoute,
  getFavoriteOffers,
  updateErrorStatus,
  getOffers,
  getReviews,
  getNearbyOffers,
  loadHotels,
  loadReviews,
  requireAuthorization,
  resetReview
} from './action';

import {ActionCreator} from "./action";

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
      type: ActionType.ADD_TO_FAVORITES,
      payload: offers
    });
  });

  it(`Action creator for updateErrorStatus returns correct action`, () => {
    expect(updateErrorStatus(1)).toEqual({
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: 1
    });
  });
  it(`Action creator for handleLengthMessage returns correct action`, () => {
    expect(ActionCreator.handleLengthMessage(true)).toEqual({
      type: ActionType.CHECKING_COMMENT,
      messageLength: true
    });
  });
  it(`Action creator for handleFormSubmit returns correct action`, () => {
    expect(ActionCreator.handleFormSubmit(`comment`, 1)).toEqual({
      type: ActionType.SEND_COMMENT,
      payload: `comment`,
      rating: 1
    });
  });
  it(`Action creator for resetReview returns correct action`, () => {
    expect(resetReview(``)).toEqual({
      type: ActionType.RESET_COMMENT,
      payload: ``,
    });
  });
  it(`Action creator for handleOfferCard returns correct action`, () => {
    expect(ActionCreator.handleOfferCard(1)).toEqual({
      type: ActionType.MOUSE_OVER,
      payload: 1
    });
  });
  it(`Action creator for handleCity returns correct action`, () => {
    expect(ActionCreator.handleCity(`Paris`)).toEqual({
      type: ActionType.SELECT_CITY,
      city: `Paris`
    });
  });
  it(`Action creator for handleSorting returns correct action`, () => {
    expect(ActionCreator.handleSorting(`Popular`)).toEqual({
      type: ActionType.SELECT_SORT,
      currentSort: `Popular`
    });
  });
  it(`Action creator for loadHotels returns correct action`, () => {
    expect(loadHotels(offers)).toEqual({
      type: ActionType.LOAD_HOTELS,
      payload: offers
    });
  });
  it(`Action creator for loadReviews returns correct action`, () => {
    expect(loadReviews(reviews, 1)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
      param: 1
    });
  });
  it(`Action creator for requireAuthorization returns correct action`, () => {
    expect(requireAuthorization(`AUTH`, `1@1.com`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
      email: `1@1.com`
    });
  });
});
