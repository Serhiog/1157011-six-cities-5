import {extend} from "../../utils";
import {
  ActionCreator,
  resetReview,
  getOffers,
  updateErrorStatus,
} from "../action";
import {messageReducer} from "./messageReducer";
import {offers} from "../../mocks/data";

describe(`Message reducer testing`, () => {
  const initialState = {
    comment: ``,
    rating: 0,
    blockSendBtn: true,
    isErrorToSubmit: false,
    offers: [],
  };

  it(`Reducer reset comment and rating`, () => {
    expect(
        messageReducer(
            extend(initialState, {comment: `Hello`, rating: 4}),
            resetReview({defaultData: {rating: 0, review: ``}})
        )
    ).toEqual(extend(initialState, {comment: ``, rating: 0}));
  });

  it(`Reducer update send button flag`, () => {
    expect(
        messageReducer(initialState, ActionCreator.handleLengthMessage(60))
    ).toEqual(extend(initialState, {blockSendBtn: false}));
  });

  it(`Reducer update comment and rating`, () => {
    expect(
        messageReducer(initialState, ActionCreator.handleFormSubmit(`Hello`, 4))
    ).toEqual(extend(initialState, {comment: `Hello`, rating: 4}));
  });

  it(`Reducer reset comment and rating`, () => {
    expect(messageReducer(initialState, updateErrorStatus(true))).toEqual(
        extend(initialState, {isErrorToSubmit: true})
    );
  });

  it(`Reducer update offers`, () => {
    expect(messageReducer(initialState, getOffers(offers))).toEqual(
        extend(initialState, {offers})
    );
  });

  it(`Reducer return current state for unsupported action`, () => {
    expect(messageReducer(initialState, {type: `UNKNOWN_ACTION`})).toEqual(
        initialState
    );
  });
});
