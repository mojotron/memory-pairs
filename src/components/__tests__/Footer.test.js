import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
describe("Footer component", () => {
  test("Footer render snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
