import React from "react";
import renderer from "react-test-renderer";

jest.mock("Dimensions");
import App from "../App";

describe("examples/App", () => {
  it("renders", () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
