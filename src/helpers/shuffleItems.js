const shuffleItems = (...items) => {
  return items.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

export default shuffleItems;
