import pickPlayingCards from "../pickPlayingCards";
import cardsData from "../../data/cardsData";

describe("pickPlayingCards helper function", () => {
  describe("card pile size", () => {
    test("pick cards for small grid", () => {
      const cards = pickPlayingCards("small", "animals");
      expect(cards).toHaveLength(12);
    });

    test("pick cards for normal grid", () => {
      const cards = pickPlayingCards("normal", "animals");
      expect(cards).toHaveLength(16);
    });

    test("pick cards for large grid", () => {
      const cards = pickPlayingCards("large", "animals");
      expect(cards).toHaveLength(30);
    });
  });

  describe("card element are correct", () => {
    const cards = pickPlayingCards("small", "animals");
    const bear = cardsData.animals[0];
    const bearCard = cards.find((card) => card.id === 0);
    expect(bearCard?.emoji).toBe(bear.emoji);
    expect(bearCard?.name).toBe(bear.name);
    expect(bearCard?.flip).toBeFalsy();
    expect(bearCard?.matched).toBeFalsy();
    expect(bearCard?.id).toBe(0);
  });
});
