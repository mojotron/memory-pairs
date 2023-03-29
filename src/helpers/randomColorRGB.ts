export const randomNumberBetween = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export const randomColorRGB = () => {
  const red = randomNumberBetween(0, 255);
  const green = randomNumberBetween(0, 255);
  const blue = randomNumberBetween(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
