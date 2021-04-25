import React from "react";
import { render, cleanup } from "@testing-library/react";
import CustomTable from "./custom-table.component";
import * as reactRedux from "react-redux";

describe("CustomTable component", () => {
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

    const { asFragment } = render(<CustomTable />);

    expect(asFragment(<CustomTable />)).toMatchSnapshot();
  });
});
