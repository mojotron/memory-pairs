import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Difficulty from "../Difficulty";

describe("Difficulty component", () => {
  test("renders difficulty button", () => {
    render(<Difficulty />);
    expect(screen.getByTestId("difficulty")).toBeInTheDocument();
  });
  test("button toggles difficulty form", () => {
    render(<Difficulty />);
    userEvent.click(screen.getByTestId("difficulty"));
    expect(screen.getByRole("form")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("difficulty"));
    const form = screen.queryByRole("form");
    expect(form).not.toBeInTheDocument();
  });
  test("renders correct form elements", () => {
    render(<Difficulty />);
    userEvent.click(screen.getByTestId("difficulty"));
    expect(screen.getByLabelText("easy")).toBeInTheDocument();
    expect(screen.getByLabelText("normal")).toBeInTheDocument();
    expect(screen.getByLabelText("hard")).toBeInTheDocument();
    expect(screen.getAllByRole("radio").length).toBe(3);
  });
});
