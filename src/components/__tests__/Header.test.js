import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("Header snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
