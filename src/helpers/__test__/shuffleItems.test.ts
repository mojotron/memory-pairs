import shuffleItems from "../shuffleItems";

describe("shuffleItems function", () => {
  test("returns same amount of items it receives", () => {
    const temp = shuffleItems("a", "b", "c");
    expect(temp.length).toBe(3);
  });

  test("returns same items passed", () => {
    const temp = shuffleItems("a", "b", "c");
    expect(temp.includes("a")).toBe(true);
    expect(temp.includes("b")).toBe(true);
    expect(temp.includes("c")).toBe(true);
  });

  test("return items in different order", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const temp = shuffleItems(...[...arr]);
    expect(temp.length).toBe(9);
    expect(temp).not.toEqual(arr);
  });
});
