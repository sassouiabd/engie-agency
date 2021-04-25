import React from "react";
import { render, cleanup } from "@testing-library/react";
import Spinner from "./spinner.component";

afterEach(cleanup);

it("match snapshot reference", () => {
  const { asFragment } = render(<Spinner />);

  expect(asFragment(<Spinner />)).toMatchSnapshot();
});
