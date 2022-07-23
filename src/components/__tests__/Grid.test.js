import { render, screen } from "@testing-library/react";
import Grid from "../Grid";

const cardsMock = [
  { id: 0, name: "grinning", emoji: "😆", flip: false, matched: false },
  { id: 1, name: "monocle", emoji: "🧐", flip: true, matched: false },
  { id: 2, name: "eyebrow", emoji: "🤨", flip: true, matched: false },
];

describe("Grid component", () => {
  test("renders cards elements", () => {
    render(<Grid cards={cardsMock} handleSelectCard={jest.fn} />);
    expect(screen.getAllByTitle("card").length).toBe(3);
  });
  test("card are flipped", () => {
    render(<Grid cards={cardsMock} handleSelectCard={jest.fn} />);
    const cardElements = screen.getAllByTitle("card");
    expect(cardElements[0].className).toBe("Card__back");
    expect(cardElements[1].className).toBe("Card__front");
    expect(cardElements[2].className).toBe("Card__front");
  });
});
