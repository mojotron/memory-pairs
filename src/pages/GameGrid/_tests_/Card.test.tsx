import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  test("display back of card if flip === false", () => {
    render(<Card id={0} emoji={"🐻"} flip={false} matched={false} />);
    expect(screen.getByRole("gridcell")).toHaveClass("Card__back-side");
  });
  test("display front of card if flip === true", () => {
    render(<Card id={0} emoji={"🐻"} flip={true} matched={false} />);
    expect(screen.getByRole("gridcell")).toHaveClass("Card__front-side");
  });
  test("front side of card displays emoji", () => {
    render(<Card id={0} emoji={"🐻"} flip={true} matched={false} />);
    expect(screen.getByRole("gridcell")).toHaveTextContent("🐻");
  });
});
