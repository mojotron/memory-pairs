import { render, screen } from "@testing-library/react";
import Board from "../Board";

const mockCards = [
  { name: "smile", emoji: "😄", id: "000" },
  { name: "smile", emoji: "😄", id: "001" },
  { name: "smile", emoji: "😄", id: "002" },
];

describe("Board component", () => {
  test("renders cards", () => {
    render(<Board cards={mockCards} />);
    expect(screen.getAllByRole("article").length).toBe(mockCards.length);
  });
});
