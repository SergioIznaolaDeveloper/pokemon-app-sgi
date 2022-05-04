import React from "react";
import { render, screen } from '@testing-library/react';
import Topics from "./Topics";

describe("Topics", () => {
  test("matches snapshot", () => {
    render(<Topics />);
    expect(screen).toMatchSnapshot();
  });
});
