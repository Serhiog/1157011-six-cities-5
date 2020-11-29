import React from "react";
import renderer from "react-test-renderer";
import {Card} from "../offer-card/offer-card";
import {serverOffers} from "../../mocks/data";
import {MemoryRouter} from "react-router-dom";

jest.mock(`../favorite-btn/favorite-btn`, () => `FavoriteButton`);

describe(`Card render`, () => {
  it(`Should Offer render correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Card
              offer={serverOffers[0]}
              offerId={1}
              handleOfferCard={() => {}}
              nearby={true}
              classCard={`cities__place-card`}
              classImageWrapper={`cities__image-wrapper`}
              authorizationStatus={`AUTH`}
            />
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
});
