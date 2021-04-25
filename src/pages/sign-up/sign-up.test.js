import React from "react";
import { render, cleanup } from "@testing-library/react";
import SignUp from "./sign-up.page";
import * as reactRedux from "react-redux";

describe("signUp component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterEach(cleanup);

  it("match snapshot reference", () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    expect(dummyDispatch).not.toHaveBeenCalled();

    const { asFragment } = render(<SignUp />);

    expect(asFragment(<SignUp />)).toMatchSnapshot();
  });
});
