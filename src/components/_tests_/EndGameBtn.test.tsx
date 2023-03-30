import { render, screen } from "../../test-utils/providers";
import EndGameBtn from "../EndGameBtn";
import userEvent from "@testing-library/user-event";
import { fakeDispatch } from "../../test-utils/providers";

describe("EndGameBtn component", () => {
  test("renders without fixed topRight position", () => {
    render(<EndGameBtn text="New Game" topRightPosition={false} />);
    const button = screen.getByRole("button", { name: /new game/i });
    expect(button).not.toHaveAttribute("style");
  });

  test("renders with fixed topRight position", () => {
    render(<EndGameBtn text="Start Game" topRightPosition={true} />);
    const button = screen.getByRole("button", { name: /start game/i });
    expect(button).toHaveAttribute("style");
    expect(button).toHaveStyle("position: absolute");
  });

  test("button call dispatch function", async () => {
    const user = userEvent.setup();
    render(<EndGameBtn text="New Game" topRightPosition={false} />);
    const button = screen.getByRole("button", { name: /new game/i });
    await user.click(button);
    expect(fakeDispatch).toBeCalledWith({ type: "END_GAME" });
  });
});
