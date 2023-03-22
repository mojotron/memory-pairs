import { render, screen } from "../../../test-utils/providers";
import NewGame from "../NewGame";

describe("New Game", () => {
  test("correctly renders", () => {
    render(<NewGame />);
    // heading
    expect(
      screen.getByRole("heading", { name: /memory pairs/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /choose grid size/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /choose card theme/i })
    ).toBeInTheDocument();
    // grid size
    expect(screen.getByTitle(/small/)).toBeInTheDocument();
    expect(screen.getByTitle(/normal/)).toBeInTheDocument();
    expect(screen.getByTitle(/large/)).toBeInTheDocument();
    // themes
    expect(screen.getByTitle(/smileys/)).toHaveTextContent("😎");
    expect(screen.getByTitle(/animals/)).toHaveTextContent("🦝");
    expect(screen.getByTitle(/fruits/)).toHaveTextContent("🍍");
    expect(screen.getByTitle(/foods/)).toHaveTextContent("🍩");
    expect(screen.getByTitle(/vehicles/)).toHaveTextContent("🚀");
    // start button
    expect(
      screen.getByRole("button", { name: /Start New Game/ })
    ).toBeInTheDocument();
  });

  test("default active options", () => {
    render(<NewGame />);
    expect(screen.getByTitle(/small/)).toHaveStyle("border: 2px solid gold");
    expect(screen.getByTitle(/smileys/)).toHaveStyle("border: 2px solid gold");
  });

  // test("change options", () => {
  //
  // });

  // test("start new game", () => {});
});
