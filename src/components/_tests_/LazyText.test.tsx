import { render, screen, waitFor } from "@testing-library/react";
import LazyText from "../LazyText";

describe("LazyText component", () => {
  test("renders text over time", async () => {
    render(<LazyText text="Hello" />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("");
    const lazy = await screen.findAllByTestId("lazy-text-letter");
    expect(lazy).toHaveLength(1);
    await waitFor(async () => {
      const lazy2 = await screen.findAllByTestId("lazy-text-letter");
      expect(lazy2).toHaveLength(5);
    });
  });
});
