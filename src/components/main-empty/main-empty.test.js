import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";

it(`MainEmpty render`, () => {
  const tree = renderer
    .create(
        <MainEmpty
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
