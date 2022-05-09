import React from "react";
import { shallow } from "enzyme";
import OneCardExtend from "./OneCardExtend";

describe("OneCardExtend", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OneCardExtend />);
    expect(wrapper).toMatchSnapshot();
  });
});
