import React from "react";
import renderer from "react-test-renderer";
import  EmptyMainPage  from "./empty-main-page";

it(`EmptyMainPage render`, () => {
  const tree = renderer
    .create(
      <EmptyMainPage
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
