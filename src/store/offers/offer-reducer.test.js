import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {offerReducer} from "./offerReducer";
import {ActionType} from "../action";
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
  changeFavorite,
  sendReview,
} from "../api-actions";
import {CITIES} from '../../consts';

const SUCCESS_CODE_REQUEST = 200;

const api = createAPI(() => {});

describe(`Offer Actions Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(offerReducer(void 0, {})).toEqual({
      city: CITIES.COLOGNE,
      hoveredOfferId: null,
      offerList: [],
      currentSort: `Popular`,
      comments: [],
      favoriteOffers: [],
      param: null,
      selectedCity: CITIES.COLOGNE,
      nearbyOffers: []
    });
  });

  it(`Reducer updates reviews`, () => {
    expect(
        offerReducer(
            {
              comments: [],
            },
            {
              type: ActionType.GET_REVIEWS,
              payload: adaptedReviews,
            }
        )
    ).toEqual({
      comments: adaptedReviews,
    });
  });

  it(`Reducer updates favorites by load favorites`, () => {
    expect(
        offerReducer(
            {
              favoriteOffers: [],
            },
            {
              type: ActionType.ADD_TO_FAVORITES,
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
        type: ActionType.ADD_TO_FAVORITES,
        payload: adaptedOffers,
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
