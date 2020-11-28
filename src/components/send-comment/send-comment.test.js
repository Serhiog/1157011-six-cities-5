import React from "react";
import renderer from "react-test-renderer";
import { SendComment } from "./send-comment";

const noop = () => {};

describe(`SendComment render`, () => {
  it(`SendComment with fill fields`, () => {
    const tree = renderer
      .create(
        <SendComment
          rating={`4`}
          review={`She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shovs odfosdof osd fodsed a white`}
          onReviewSubmit={noop}
          onTextFieldChange={noop}
          onRatingChange={noop}
          offerId={`1`}
          resetState={noop}
          isErrorToSubmit={false}
          updateErrorStatusAction={noop}
        />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SendComment without rating field`, () => {
    const tree = renderer
      .create(
        <SendComment
          rating={``}
          review={`She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`}
          onReviewSubmit={noop}
          onTextFieldChange={noop}
          onRatingChange={noop}
          offerId={`1`}
          resetState={noop}
          isErrorToSubmit={false}
          updateErrorStatusAction={noop}
        />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SendComment without review field`, () => {
    const tree = renderer
      .create(
        <SendComment
          rating={`3`}
          review={``}
          onReviewSubmit={noop}
          onTextFieldChange={noop}
          onRatingChange={noop}
          offerId={`1`}
          resetState={noop}
          isErrorToSubmit={false}
          updateErrorStatusAction={noop}
        />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SendComment review field is short`, () => {
    const tree = renderer
      .create(
        <SendComment
          rating={`3`}
          review={`She carefully took a crumpled`}
          onReviewSubmit={noop}
          onTextFieldChange={noop}
          onRatingChange={noop}
          offerId={`1`}
          resetState={noop}
          isErrorToSubmit={false}
          updateErrorStatusAction={noop}
        />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`SendComment review field is long`, () => {
    const tree = renderer
      .create(
        <SendComment
          rating={`3`}
          review={`She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white. She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white. She carefully took a crumpled, half-torn ten-dollar bill from her purse and handed it to him. He shoved a white`}
          onReviewSubmit={noop}
          onTextFieldChange={noop}
          onRatingChange={noop}
          offerId={`1`}
          resetState={noop}
          isErrorToSubmit={false}
          updateErrorStatusAction={noop}
        />
      )

      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
