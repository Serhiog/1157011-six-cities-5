import MockAdapter from "axios-mock-adapter";
import { createAPI } from "../../services/api";
import { offerReducer } from "./offerReducer";
import { ActionType } from "../action";
import {
  serverReviews,
  serverOffers,
  reviewData,
  adaptedOffers,
  adaptedReviews,
} from "../../mocks/data";
import {
  fetchNearbyOffersList,
  fetchFavoriteOffersList,
  fetchReviewsList,
  changeFavorite,
  sendReview,
} from "../api-actions";

const SUCCESS_CODE_REQUEST = 200;

const api = createAPI(() => {});

describe(`Offer Actions Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(offerReducer(void 0, {})).toEqual({
      currentSort: `Popular`,
      city: null,
      openSort: false,
      comments: [],
      activeOfferId: ``,
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      hoveredOfferId: null,
      offerList: [],
      param: null,
      selectedCity: "Cologne",
    });
  });

  it(`Reducer updates activeOfferId`, () => {
    expect(
      offerReducer(
        {
          activeOfferId: `1`,
        },
        {
          type: ActionType.UPDATE_ACTIVE_OFFER_ID,
          payload: `10`,
        }
      )
    ).toEqual({
      activeOfferId: `10`,
    });
  });

  it(`Reducer updates openSort`, () => {
    expect(
      offerReducer(
        {
          openSort: false,
        },
        {
          type: ActionType.OPEN_SORT,
          payload: true,
        }
      )
    ).toEqual({
      openSort: true,
    });
  });

  it(`Reducer updates reviews`, () => {
    expect(
      offerReducer(
        {
          reviews: [],
        },
        {
          type: ActionType.GET_REVIEWS,
          payload: adaptedReviews,
        }
      )
    ).toEqual({
      reviews: adaptedReviews,
    });
  });

  it(`Reducer updates sort type by change sort type`, () => {
    expect(
      offerReducer(
        {
          currentSort: `Popular`,
        },
        {
          type: ActionType.UPDATE_SORT,
          payload: `Rating`,
        }
      )
    ).toEqual({
      currentSort: `Rating`,
      openSort: false,
    });
  });

  it(`Reducer updates favorites by load favorites`, () => {
    expect(
      offerReducer(
        {
          favoriteOffers: [],
        },
        {
          type: ActionType.GET_FAVORITE_OFFERS,
          payload: adaptedOffers,
        }
      )
    ).toEqual({
      favoriteOffers: adaptedOffers,
    });
  });

  it(`Reducer updates nearby offers by load offers`, () => {
    expect(
      offerReducer(
        {
          nearbyOffers: [],
        },
        {
          type: ActionType.GET_NEARBY_OFFERS,
          payload: adaptedOffers,
        }
      )
    ).toEqual({
      nearbyOffers: adaptedOffers,
    });
  });
});

describe(`Testing related to offers async operations`, () => {
  it(`makes a correct API call for nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOfferLoader = fetchNearbyOffersList(`1`);

    apiMock.onGet(`/hotels/1/nearby`).reply(SUCCESS_CODE_REQUEST, serverOffers);

    return nearbyOfferLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.GET_NEARBY_OFFERS,
        payload: adaptedOffers,
      });
    });
  });

  it(`makes a correct API call for favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferLoader = fetchFavoriteOffersList();

    apiMock.onGet(`/favorite`).reply(SUCCESS_CODE_REQUEST, serverOffers);

    return favoriteOfferLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.GET_FAVORITE_OFFERS,
        payload: adaptedOffers,
      });
    });
  });

  it(`makes a correct API call for reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviewsList(`1`);

    apiMock.onGet(`/comments/1`).reply(SUCCESS_CODE_REQUEST, serverReviews);

    return reviewsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.GET_REVIEWS,
        payload: adaptedReviews,
      });
    });
  });

  it(`makes a correct API call for handling favorite offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteStatus = changeFavorite(`1`, 1);

    apiMock.onPost(`/favorite/1/1`).reply(SUCCESS_CODE_REQUEST, serverOffers);

    return changeFavoriteStatus(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });

  it(`makes a correct API call for post review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendReviewAction = sendReview(reviewData, `1`);

    apiMock.onPost(`comments/1`).reply(SUCCESS_CODE_REQUEST, serverReviews);

    return sendReviewAction(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.GET_REVIEWS,
        payload: adaptedReviews,
      });
    });
  });
});
