import HomePage from "../pages";

import { render } from "@testing-library/react";

describe("HomePage", () => {
  it("renders", () => {
    const { getByText } = render(<HomePage />);

    expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
  });
});
