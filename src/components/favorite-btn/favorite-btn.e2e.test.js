import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButton} from "../favorite-btn/favorite-btn";
import {offers} from "../../mocks/data";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Favorite button works correct`, () => {
  it(`Should favorite button be pressed`, () => {
    const changeFavoriteStatusAction = jest.fn();

    const wrapper = mount(
        <FavoriteButton
          offer={offers[0]}
          changeFavoriteStatusAction={changeFavoriteStatusAction}
          classCard={`place-card`}
          auth={true}
        />
    );

    const favoriteButton = wrapper.find(`button.place-card__bookmark-button`);
    favoriteButton.simulate(`click`);
    expect(changeFavoriteStatusAction).toHaveBeenCalledTimes(1);
  });
});
