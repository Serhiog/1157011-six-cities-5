import React from "react";
import renderer from "react-test-renderer";
import {SelectSort} from "../select-sort/select-sort";

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(<SelectSort handleSorting={() => {}} />, {
      createNodeMock: () => {
        return {};
      },
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
