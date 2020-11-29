import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {serverOffers} from "../../mocks/data";

jest.mock(`../favorite-btn/favorite-btn`, () => `FavoriteButton`);

describe(`Map render`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer
      .create(
          <Map
            offers={serverOffers}
            selectedCity={serverOffers[0]}
            hoveredOfferId={`1`}
            mapSize={`100px`}
            forOffer={true}
            handleCity={() => {}}
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
