import {userStateReducer} from "./userReducer";
import {requireAuthorization} from "../action";

describe(`User action reducer testing`, () => {
  const initialState = {
    authorizationStatus: `NO_AUTH`,
    email: null,
  };

  it(`Reducer updates`, () => {
    expect(
        userStateReducer(
            initialState,
            requireAuthorization(`AUTH`, `hell@mail.com`)
        )
    ).toEqual({
      authorizationStatus: `AUTH`,
      email: `hell@mail.com`
    });
  });

  it(`Reducer return current state for unsupported action`, () => {
    expect(
        userStateReducer(initialState, {type: `UNKNOWN_ACTION`})
    ).toEqual(initialState);
  });
});
