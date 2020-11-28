
import { createAPI } from "../../services/api";
import { userStateReducer } from "./userReducer";
import { ActionType } from "../action";

const api = createAPI(() => {});

it(`Reducer updates`, () => {
  expect(
    userStateReducer(
      {
        email: ``,
      },
      {
        type: ActionType.SAVE_EMAIL,
        payload: ``,
      }
    )
  ).toEqual({
    email: ``,
  });
});
