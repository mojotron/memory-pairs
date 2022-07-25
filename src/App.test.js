import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  describe("initial render", () => {
    test("renders header", () => {
      render(<App />);
      expect(
        screen.getByRole("heading", { name: /memory pairs/i })
      ).toBeInTheDocument();
    });
    test("renders empty grid", () => {
      render(<App />);
      const gridElement = screen.getByTestId("grid");
      const cardElements = screen.queryAllByTitle("card");
      expect(gridElement.className).toBe("Grid");
      expect(cardElements.length).toBe(0);
    });
    test("renders start game btn", () => {
      render(<App />);
      expect(
        screen.getByRole("button", { name: /new game/i })
      ).toBeInTheDocument();
    });
  });

  describe("start new game", () => {
    test("renders cards and turns", () => {
      render(<App />);
      const startButton = screen.getByRole("button", { name: /new game/i });
      userEvent.click(startButton);
      const cardElements = screen.queryAllByTitle("card");
      expect(cardElements.length).toBe(16);
      expect(screen.getByText(/turn/i)).toBeInTheDocument();
    });
  });

  describe("handle card click", () => {
    test("click flips card", () => {
      render(<App />);
      const startButton = screen.getByRole("button", { name: /new game/i });
      userEvent.click(startButton);
      const cardElements = screen.queryAllByTitle("card");
      expect(cardElements[0].className).toBe("Card__back");
      userEvent.click(cardElements[0]);
      const cardElements2 = screen.queryAllByTitle("card");
      expect(cardElements2[0].className).toBe("Card__front");
    });

    test("flip cards back after second pick", async () => {
      render(<App />);
      const startButton = screen.getByRole("button", { name: /new game/i });
      userEvent.click(startButton);
      const cardElements = screen.queryAllByTitle("card");
      expect(cardElements[0].className).toBe("Card__back");
      expect(cardElements[1].className).toBe("Card__back");
      userEvent.click(cardElements[0]);
      userEvent.click(cardElements[1]);
      expect(cardElements[0].className).toBe("Card__front");
      expect(cardElements[1].className).toBe("Card__front");
      await waitFor(
        () => {
          const cardElements2 = screen.getAllByTitle("card");
          expect(cardElements2[0].className).toBe("Card__back");
        },
        { timeout: 2000 }
      );
    });
  });

  describe("change difficulty", () => {
    test("radio button change", () => {
      render(<App />);
      userEvent.click(screen.getByTestId("difficulty"));
      const radioButtons = screen.getAllByRole("radio");
      expect(radioButtons[1]).toBeChecked();
      userEvent.click(radioButtons[0]);
      expect(radioButtons[0]).toBeChecked();
      userEvent.click(radioButtons[2]);
      expect(radioButtons[2]).toBeChecked();
    });
    test("change game difficulty", () => {
      render(<App />);
      userEvent.click(screen.getByTestId("difficulty"));
      const radioButtons = screen.getAllByRole("radio");
      userEvent.click(radioButtons[0]);
      const startButton = screen.getByRole("button", { name: /new game/i });
      userEvent.click(startButton);
      expect(screen.getAllByTitle("card").length).toBe(12);
      userEvent.click(radioButtons[2]);
      userEvent.click(startButton);
      expect(screen.getAllByTitle("card").length).toBe(30);
    });
  });
});
