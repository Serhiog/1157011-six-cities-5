import React from "react";
import renderer from "react-test-renderer";
import { Offer } from "./offer";
import { serverOffers } from "../../mocks/data";

jest.mock(`../review-list/review-list`, () => `ReviewList`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../offers-list/offer-list`, () => `OfferList`);

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
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
      />,
      {
        createNodeMock: () => {
          return {};
        },
      }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
