import pickPlayingCards from "../pickPlayingCards";
import cardsData from "../../data/cardsData";

describe("pickPlayingCards helper function", () => {
  test("pick cards for small grid", () => {
    const cards = pickPlayingCards("small", "animals");
    console.log(cards);

    expect(cards).toHaveLength(12);
  });
});
