import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./nearby-offers-list";
import { serverOffers } from "../../mocks/data";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);

describe(`OfferList render`, () => {
  it(`Should OfferList render correctly`, () => {
    const tree = renderer
      .create(
        <OfferList
        offers={serverOffers}
        classList={`favorites__places`}
        classCard={`favorites__card`}
        classImageWrapper={`favorites__image-wrapper`}
        forFavorites={true}
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
});
