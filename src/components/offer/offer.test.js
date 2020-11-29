import React from "react";
import renderer from "react-test-renderer";
import {Offer} from "./offer";
import {serverOffers} from "../../mocks/data";
import {MemoryRouter} from "react-router-dom";
jest.mock(`../review-list/review-list`, () => `ReviewList`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../offers-list/offer-list`, () => `OfferList`);
jest.mock(`../favorite-btn/favorite-btn`, () => `FavoriteBtn`);

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Offer
            offer={serverOffers[0]}
            nearbyOffers={serverOffers}
            actualOffer={serverOffers[0]}
            getReviews={() => {}}
            authorizationStatus={`AUTH`}
            isLogged={true}
            email={`email@email.com`}
            goToFavorites={() => {}}
            getNearbyOffers={serverOffers}
          />
        </MemoryRouter>,
        {
          createNodeMock: () => {
            return {};
          },
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
