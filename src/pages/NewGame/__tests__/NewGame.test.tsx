import { render, screen } from "../../../test-utils/providers";
import userEvent from "@testing-library/user-event";
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

  test("change options", async () => {
    const user = userEvent.setup();
    render(<NewGame />);

    await user.click(screen.getByTitle(/normal/));
    expect(screen.getByTitle(/small/)).toHaveStyle("border: 1px solid white");
    expect(screen.getByTitle(/normal/)).toHaveStyle("border: 2px solid gold");
    expect(screen.getByTitle(/large/)).toHaveStyle("border: 1px solid white");

    await user.click(screen.getByTitle(/large/));
    expect(screen.getByTitle(/small/)).toHaveStyle("border: 1px solid white");
    expect(screen.getByTitle(/normal/)).toHaveStyle("border: 1px solid white");
    expect(screen.getByTitle(/large/)).toHaveStyle("border: 2px solid gold");

    await user.click(screen.getByTitle("fruits"));
    expect(screen.getByTitle(/smileys/)).toHaveStyle("border: 1px solid white");
    expect(screen.getByTitle(/animals/)).toHaveStyle("border: 1px solid white");
    expect(screen.getByTitle(/fruits/)).toHaveStyle("border: 2px solid gold");
    expect(screen.getByTitle(/foods/)).toHaveStyle("border: 1px solid white");
    expect(screen.getByTitle(/vehicles/)).toHaveStyle(
      "border: 1px solid white"
    );
  });

  // test("start new game", async () => {
  //   render(<NewGame />);
  // });
});
