import React from "react";
import Card from "./Card";
import { render, screen } from '@testing-library/react';

describe("Topic", () => {
  test("matches snapshot", () => {
    render(<Card />);
    expect(screen).toMatchSnapshot();
  });
});
