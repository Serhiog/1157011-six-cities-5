import {userStateReducer} from "./userReducer";
import {ActionType} from "../action";

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
