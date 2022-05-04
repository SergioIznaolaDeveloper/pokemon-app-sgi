import React from "react";
import Main from "./Main";
import { render, screen } from '@testing-library/react';

describe("Main", () => {
  test("matches snapshot", () => {
    render(<Main />);
    expect(screen).toMatchSnapshot();
  });
});
