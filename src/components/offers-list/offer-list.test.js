import React from "react";
import renderer from "react-test-renderer";
import { OfferList } from "../offers-list/offer-list";
import { serverOffers } from "../../mocks/data";

jest.mock(`../offer-card/offer-card`, () => `OfferCard`);
jest.mock(`../select-sort/select-sort`, () => `SelectSort`);

describe(`OfferList render`, () => {
  it(`Should Offer render correctly`, () => {
    const tree = renderer
      .create(
        <OfferList
          offers={serverOffers}
          city={`Paris`}
          classList={`near-places__list`}
          classCard={`favorites__card`}
          classImageWrapper={`favorites__image-wrapper`}
          forFavorites={false}
          nearby={true}
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
