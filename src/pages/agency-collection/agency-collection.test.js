import React from "react";
import { render, cleanup } from "@testing-library/react";
import AgencyCollection from "./agency-collection.page";
import * as reactRedux from "react-redux";

describe("Agency collection page", () => {
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

    const { asFragment } = render(<AgencyCollection />);

    expect(asFragment(<AgencyCollection />)).toMatchSnapshot();
  });
});
