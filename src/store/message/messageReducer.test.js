import {resetReview} from "../action";

import {messageReducer} from "./messageReducer";


it(`Reducer updates`, () => {
  expect(
      messageReducer(
          {
            comment: `Hello`,
            rating: `5`,
            blockSendBtn: true,
            isErrorToSubmit: false,
            offers: [],
          },
          resetReview({defaultData: {rating: ``, review: ``}})
      )
  ).toEqual({
    comment: ``,
    rating: ``,
    blockSendBtn: true,
    isErrorToSubmit: false,
    offers: [],
  });
});
