import React from "react";
import renderer from "react-test-renderer";
import { ReviewList } from "../review-list/review-list";
import { serverReviews } from "../../mocks/data";

jest.mock(`../review/review`, () => `Review`);
jest.mock(`../send-comment/send-comment`, () => `SendComment`);

describe(`ReviewList render`, () => {
  it(`Should Offer render correctly`, () => {
    const tree = renderer
      .create(
        <ReviewList reviews={serverReviews} authorizationStatus={`AUTH`} />,
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
