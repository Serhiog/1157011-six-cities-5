import React from "react";
import renderer from "react-test-renderer";
import NearbyOffer from "./nearby-offer";
import {serverOffers} from "../../mocks/data";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

it(`Should NearbyOffer render correctly`, () => {
  const tree = renderer
    .create(
        <NearbyOffer offer={serverOffers[0]} handleOfferCard={() => {}} />,
        {
          createNodeMock: () => {
            return {};
          },
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
