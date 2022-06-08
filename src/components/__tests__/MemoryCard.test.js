import { fireEvent, render, screen } from "@testing-library/react";
import MemoryCard from "../MemoryCard";
//{ "name": "smile", "emoji": "😊" }

describe("MemoryCard component", () => {
  test("renders para with props emoji", () => {
    render(<MemoryCard name="smile" emoji="😊" id="000" />);
    expect(screen.getByRole("heading").textContent).toBe("😊");
  });

  test("card have data-name attribute", () => {
    render(<MemoryCard name="smile" emoji="😊" id="000" />);
    expect(screen.getByRole("article").dataset.id).toBe("000");
  });

  test("on initial render doesn't have active class", () => {
    render(<MemoryCard name="smile" emoji="😊" id="000" />);
    expect(screen.getByRole("article")).not.toHaveClass("active");
  });

  test("on click have active class", () => {
    render(<MemoryCard name="smile" emoji="😊" id="000" />);
    const card = screen.getByRole("article");
    fireEvent.click(card);
    expect(card).toHaveClass("active");
  });

  test("card with match class cant be clicked", () => {});
});
