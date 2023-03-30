import { fakeDispatch, render, screen } from "../../../test-utils/providers";
import userEvent from "@testing-library/user-event";
import Card from "../components/Card";
import { debug } from "console";

describe("Card", () => {
  test("display back of card if flip === false", () => {
    render(
      <Card
        id={0}
        emoji={"🐻"}
        flip={false}
        matched={false}
        cardName={"bear"}
      />
    );
    expect(screen.getByRole("gridcell")).toHaveClass("Card__back-side");
  });

  test("display front of card if flip === true", () => {
    render(
      <Card id={0} emoji={"🐻"} flip={true} matched={false} cardName={"bear"} />
    );
    expect(screen.getByRole("gridcell")).toHaveClass("Card__front-side");
  });

  test("front side of card displays emoji", () => {
    render(
      <Card id={0} emoji={"🐻"} flip={true} matched={false} cardName={"bear"} />
    );
    expect(screen.getByRole("gridcell")).toHaveTextContent("🐻");
  });

  test("calls dispatch when clicking on card back", async () => {
    const user = userEvent.setup();
    render(
      <Card
        id={0}
        emoji={"🐻"}
        flip={false}
        matched={false}
        cardName={"bear"}
      />
    );
    const card = screen.getByRole("gridcell");
    await user.click(card);
    expect(fakeDispatch).toBeCalledWith({
      payload: {
        cardId: 0,
        cardName: "bear",
        firstPick: true,
      },
      type: "FLIP_CARD",
    });
  });

  test("not calling dispatch when clicking on card front", async () => {
    const user = userEvent.setup();
    render(
      <Card id={0} emoji={"🐻"} flip={true} matched={false} cardName={"bear"} />
    );
    const card = screen.getByRole("gridcell");
    await user.click(card);
    expect(fakeDispatch).not.toBeCalled();
  });
});
