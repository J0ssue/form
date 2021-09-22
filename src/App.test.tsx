import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App snapshot", () => {
  expect(render(<App />)).toMatchSnapshot();
});
