import React from "react";
import { render, cleanup } from "@testing-library/react";
import SignIn from "./sign-in.page";
import * as reactRedux from "react-redux";

describe("signIn component", () => {
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

    expect(dummyDispatch).not.toHaveBeenCalled()

    const { asFragment } = render(<SignIn />);

     expect(asFragment(<SignIn />)).toMatchSnapshot();
  });
});
