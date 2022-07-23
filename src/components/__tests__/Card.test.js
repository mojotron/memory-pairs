import { render, screen } from "@testing-library/react";
import Card from "../Card";

const cardDataMock = [
  { id: 1, name: "nerd", emoji: "🤓", flip: false, matched: false },
  { id: 1, name: "nerd", emoji: "🤓", flip: true, matched: false },
];

describe("Card component", () => {
  test("by default displays back of card", () => {
    render(<Card data={cardDataMock[0]} handleSelectCard={jest.fn} />);
    expect(screen.getByTitle("card").className).toBe("Card__back");
  });
  test("when status is flip display front as", () => {
    render(<Card data={cardDataMock[1]} handleSelectCard={jest.fn} />);
    expect(screen.getByTitle("card").className).toBe("Card__front");
  });
  test("front card renders span with emoji", () => {
    render(<Card data={cardDataMock[1]} handleSelectCard={jest.fn} />);
    expect(screen.getByText("🤓")).toBeInTheDocument();
  });
});
