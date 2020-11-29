import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import {serverOffers} from "../../mocks/data";
import {BrowserRouter} from "react-router-dom";

jest.mock(`../offers-list/offer-list`, () => `OfferList`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../cities-list/cities-list`, () => `CitiesList`);
jest.mock(`../main-empty/main-empty`, () => `MainEmpty`);

it(`MainPage with offers`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MainPage
            goToFavorites={() => {}}
            offers={serverOffers}
            isLogged={true}
            email={`email@email.com`}
            city={{
              location: {latitude: 1, longitude: 1},
              name: `Cologne`
            }}
          />
        </BrowserRouter>
    )

    .toJSON();

  expect(tree).toMatchSnapshot();
});
