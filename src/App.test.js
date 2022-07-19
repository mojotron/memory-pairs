import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders new game btn", () => {
    render(<App />);
    expect(
      screen.getByRole("button", { name: /new game/i })
    ).toBeInTheDocument();
  });
});
