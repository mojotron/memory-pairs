import { render, screen, waitFor } from "../../../test-utils/providers";
import userEvent from "@testing-library/user-event";
import GameWon from "../GameWon";
import { fakeDispatch } from "../../../test-utils/providers";

describe("GameWon page", () => {
  test("renders correctly", async () => {
    const user = userEvent.setup();
    render(<GameWon />);

    const turnHeading = screen.getByRole("heading", {
      name: /took you 0 turns to finish/i, // 0 is from mocks
    });
    expect(turnHeading).toBeInTheDocument();
    const newGameBtn = screen.getByRole("button", { name: /new game/i });
    await user.click(newGameBtn);
    expect(fakeDispatch).toBeCalledWith({ type: "END_GAME" });

    await waitFor(
      async () => {
        const lazy = await screen.findAllByTestId("lazy-text-letter");
        expect(lazy).toHaveLength("Congratulation!".length);
      },
      { timeout: 2000 }
    );
  });
});
