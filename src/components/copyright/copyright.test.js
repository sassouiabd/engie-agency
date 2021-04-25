import React from "react";
import { render, cleanup } from "@testing-library/react";
import Copyright from "./copyright.component";

describe("Copyright component", () => {
  afterEach(cleanup);

  it("match snapshot reference", () => {
    const { asFragment } = render(<Copyright />);

    expect(asFragment(<Copyright />)).toMatchSnapshot();
  });
});
