import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

const mockStore = configureMockStore();
const store = mockStore({});

test("should render initial layout", () => {
  const component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(component.exists()).toBe(true);
});
