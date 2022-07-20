import { render, screen } from "@testing-library/react";
import Grid from "../Grid";

const cardsMock = [
  { id: 0, name: "grinning", emoji: "😆" },
  { id: 1, name: "monocle", emoji: "🧐" },
  { id: 2, name: "eyebrow", emoji: "🤨" },
];

describe("Grid component", () => {
  test("renders cards elements", () => {
    render(<Grid cards={cardsMock} />);
    expect(screen.getAllByTitle("card").length).toBe(3);
  });
});
