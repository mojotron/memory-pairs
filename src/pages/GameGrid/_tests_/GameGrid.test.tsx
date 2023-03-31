import { fakeDispatch, render, screen } from "../../../test-utils/providers";
import userEvent from "@testing-library/user-event";
import GameGrid from "../GameGrid";

describe("GameGrid", () => {
  test("renders right number of cards", async () => {
    const user = userEvent.setup();
    render(<GameGrid />);
    const cardElements = screen.getAllByRole("gridcell");
    expect(cardElements).toHaveLength(4);

    await user.click(cardElements[0]);
    expect(fakeDispatch).toBeCalledWith({
      payload: { cardId: 0, cardName: "bear", firstPick: true },
      type: "FLIP_CARD",
    });
  });
});
