import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withForm from "./with-form";
import {reviews} from "../../mocks/data";

const noop = () => { };

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withForm(MockComponent);

it(`withForm render`, () => {
  const tree = renderer
    .create(
        (<MockComponentWrapped
          onRatingChange={noop}
          onTextFieldChange={noop}
          rating={`5`}
          review={reviews[0].review}
          resetState={noop}
        >
          <React.Fragment />
        </MockComponentWrapped>)
    )

  .toJSON();

  expect(tree).toMatchSnapshot();
});
