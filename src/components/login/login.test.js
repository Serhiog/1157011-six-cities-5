import React from "react";
import renderer from "react-test-renderer";
import Login from "./login";
import {BrowserRouter} from "react-router-dom";

it(`Login render`, () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Login onSubmit={() => {}} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
