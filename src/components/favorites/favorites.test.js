import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Favorites } from "./favorites";
import { offers } from "../../mocks/data";

const noop = () => {};
jest.mock(`../favorite-item/favorite-item`, () => `FavoriteItem`);

describe(`Favorites render`, () => {
  it(`Should Favorites render correctly`, () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Favorites
            favoriteOffers={offers}
            getFavoriteOffers={noop}
            isLogged={true}
            email={`email@email@.com`}
          ></Favorites>
        </BrowserRouter>
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should Favorites without offers render correctly`, () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Favorites
            favoriteOffers={[]}
            getFavoriteOffers={noop}
            isLogged={true}
            email={`email@email@.com`}
          />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
