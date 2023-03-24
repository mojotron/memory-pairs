// constants
import CARDS_LENGTH from "../constants/cardsLength";
// data
import cardsData from "../data/cardsData";
// helpers
import shuffleItems from "./shuffleItems";
// types
import { CardType, EmojiType } from "../types";

const pickPlayingCards = (gridSize: string, emojiSet: string) => {
  const cardsLength: number = CARDS_LENGTH[gridSize];
  const cardSet: EmojiType[] = cardsData[emojiSet].slice(0, cardsLength);
  const gameCards: CardType[] = [...cardSet, ...cardSet].map((emoji, index) => {
    return {
      id: index,
      name: emoji.name,
      emoji: emoji.emoji,
      flip: false,
      matched: false,
    };
  });
  return shuffleItems(...gameCards);
};

export default pickPlayingCards;
