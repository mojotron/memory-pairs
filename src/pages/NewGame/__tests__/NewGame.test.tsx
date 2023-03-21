import { render, screen } from "../../../test-utils/providers";
import NewGame from "../NewGame";

describe("New Game", () => {
  test("correctly renders", () => {
    render(<NewGame />);
    // heading
    const heading = screen.getByRole("heading", { name: /memory pairs/i });
    expect(heading).toBeInTheDocument();
    // grid size
    const smallGrid = screen.getByTitle(/small grid/);
    expect(smallGrid).toBeInTheDocument();

    const normalGrid = screen.getByTitle(/normal grid/);
    expect(normalGrid).toBeInTheDocument();

    const largeGrid = screen.getByTitle(/large grid/);
    expect(largeGrid).toBeInTheDocument();
    // themes
    // start button
    const startButton = screen.getByRole("button", { name: /Start New Game/ });
    expect(startButton).toBeInTheDocument();
  });
});
