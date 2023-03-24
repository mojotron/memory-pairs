import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  test("display back of card if flip === false", () => {
    render(<Card id={0} emoji={"🐻"} flip={true} matched={false} />);
  });
  test("display front of card if flip === true", () => {});
});
