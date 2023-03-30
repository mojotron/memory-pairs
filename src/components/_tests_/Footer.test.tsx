import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  test("renders correctly", () => {
    render(<Footer />);
    const heading = screen.getByRole("heading", {
      name: /created by @mojotron/,
    });
    expect(heading).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /@mojotron/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/mojotron/memory-card"
    );
  });
});
