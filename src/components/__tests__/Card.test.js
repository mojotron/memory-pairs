import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card component", () => {
  test("by default displays back of card", () => {
    render(<Card />);
    expect(screen.getByTitle("card").className).toBe("Card");
  });
  test("when status is flip display front as", () => {});
});
