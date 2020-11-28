import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from "./login";
import {enteredInfo} from "../../mocks/data";

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`Submit form in Login`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(
      <Login
        onSubmit={onSubmit}
      />);

  wrapper.find(`.login__form`).simulate(`submit`, mockEvent);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenNthCalledWith(1, enteredInfo);
});
