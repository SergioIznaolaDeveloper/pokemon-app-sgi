import React from "react";
import { shallow } from "enzyme";
import OneCard from "./OneCard";

describe("OneCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OneCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
