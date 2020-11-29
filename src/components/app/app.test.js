import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {App} from "./app";
import {offers} from "../../mocks/data";


jest.mock(`../private-route/private-route`, () => `PrivateRoute`);
jest.mock(`../login/login`, () => `Login`);
jest.mock(`../favorites/favorites`, () => `Favorites`);
jest.mock(`../offer/offer`, () => `Offer`);
jest.mock(`../main-page/main-page`, () => `MainPage`);

it(`App render`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <App
            offers={offers}
          />
        </BrowserRouter>
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});

