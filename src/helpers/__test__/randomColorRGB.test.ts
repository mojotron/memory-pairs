import { randomNumberBetween, randomColorRGB } from "../randomColorRGB";

describe("random color generator", () => {
  test("randomNumberBetween helper", () => {
    expect(randomNumberBetween(1, 1)).toBe(1);
    const test1 = randomNumberBetween(1, 2);
    expect(test1).toBeGreaterThanOrEqual(1);
    expect(test1).toBeLessThanOrEqual(2);
  });

  test("randomColorRBG", () => {
    const color = randomColorRGB();
    const regex = /^rgb\((\d+),\s(\d+),\s(\d+)\)$/;
    expect(color).toMatch(regex);
  });
});
