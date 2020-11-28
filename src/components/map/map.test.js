import React from "react";
import renderer from "react-test-renderer";
import Map from "./map";
import { serverOffers } from "../../mocks/data";

describe(`Map render`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer
      .create(
        <Map
          offers={serverOffers, gg}
          selectedCity={serverOffers[0]}
          hoveredOfferId={`1`}
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
