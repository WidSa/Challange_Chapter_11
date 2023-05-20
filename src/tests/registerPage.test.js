/** @jest-environment jsdom */
import React from "react";
import { render } from "./testUtils.js";
import RegisterPage from "../pages/register/index.jsx";
import { Provider } from "react-redux";
import store from "../store/store";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  route: "/mock-route",
  basePath: "",
  pathname: "/mock-route",
  query: {},
  asPath: "/mock-route",
};

useRouter.mockReturnValue(mockRouter);

describe("render test", () => {
  it("renders register page without crashing", () => {
    render(<RegisterPage />);
  });
});
