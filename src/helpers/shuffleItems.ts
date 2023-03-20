const shuffleItems = <Type>(...items: Type[]): Type[] => {
  return items.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

export default shuffleItems;
