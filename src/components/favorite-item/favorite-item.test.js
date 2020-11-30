import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import {FavoriteItem} from "./favorite-item";
import {serverOffers} from "../../mocks/data";

jest.mock(`../offers-list/offer-list`, () => `OfferList`);

it(`Should FavoriteItem render correctly`, () => {

  const tree = renderer
    .create(
        <MemoryRouter>
          <FavoriteItem offers={serverOffers} />
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
