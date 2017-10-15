import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

jest.mock("Dimensions");
import ViewPager from "../ViewPager";

describe("src/ViewPager", () => {
  const mockData = [{ label: "1" }, { label: "2" }, { label: "3" }];
  const mockRender = d => <Text>{d.label}</Text>;

  it("renders", () => {
    const rendered = renderer
      .create(<ViewPager pageData={mockData} renderPage={mockRender} />)
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
