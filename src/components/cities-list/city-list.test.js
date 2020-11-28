import React from "react";
import renderer from "react-test-renderer";
import { CitiesList } from "./cities-list";
import { cities } from "../../mocks/data";

it(`CityList render`, () => {
  const tree = renderer
    .create(
      <CitiesList
        unicCities={cities}
        currentCity={`Dusseldorf`}
        handleCity={() => {}}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
