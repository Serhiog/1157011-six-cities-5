import React from "react";
import renderer from "react-test-renderer";
import Review from "../review/review";
import {serverReviews} from "../../mocks/data";

describe(`Review render`, () => {
  it(`Should Offer render correctly`, () => {
    const tree = renderer
      .create(<Review reviewList={serverReviews} />, {
        createNodeMock: () => {
          return {};
        },
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
