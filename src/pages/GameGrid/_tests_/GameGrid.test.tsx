import { render, screen } from "../../../test-utils/providers";
import userEvent from "@testing-library/user-event";
import GameGrid from "../GameGrid";

describe("GameGrid", () => {
  test("renders right number of cards", () => {
    render(<GameGrid />);
    const cardElements = screen.getAllByRole("gridcell");
    expect(cardElements).toHaveLength(12);
  });
});
