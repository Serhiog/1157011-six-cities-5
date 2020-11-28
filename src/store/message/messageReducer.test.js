
import { createAPI } from "../../services/api";
import { messageReducer } from "./messageReducer";

const api = createAPI(() => {});

it(`Reducer updates`, () => {
  expect(
    messageReducer(
      {
        comment: ``,
      },
      {
        payload: `Oliver.conner@gmail.com`,
      }
    )
  ).toEqual({
    comment: `Oliver.conner@gmail.com`,
  });
});
