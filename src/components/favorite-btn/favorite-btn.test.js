import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FavoriteButton} from "./favorite-btn";
import {offers} from "../../mocks/data";

describe(`FavoriteButton render`, () => {
  it(`FavoriteButton without authorization`, () => {
    const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteButton
            offer={offers[0]}
            classCard={`place-card`}
            currentCity={`Dusseldorf`}
            auth={false}
            changeFavoriteStatusAction={() => { }}
          />
        </BrowserRouter>
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`AuthScreen with authorization`, () => {
    const tree = renderer
    .create(
        <FavoriteButton
          offer={offers[0]}
          classCard={`place-card`}
          currentCity={`Dusseldorf`}
          auth={true}
          changeFavoriteStatusAction={() => { }}
        />
    )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

