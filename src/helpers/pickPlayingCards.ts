import CARDS_LENGTH from "../constants/cardsLength";
import cardsData from "../data/cardsData";
import shuffleItems from "./shuffleItems";

type Emoji = { name: string; emoji: string };
type Card = {
  id: number;
  name: string;
  emoji: string;
  flip: boolean;
  matched: boolean;
};

const pickPlayingCards = (gridSize: string, emojiSet: string) => {
  const cardsLength: number = CARDS_LENGTH[gridSize];
  const cardSet: Emoji[] = cardsData[emojiSet].slice(0, cardsLength);
  const gameCards: Card[] = [...cardSet, ...cardSet].map((emoji, index) => {
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

// const shuffleCards = () => {
//   const cardNum = GAME_DIFFICULTY_CARD_NUM[difficulty];
//   const gameCards = [...cardsData].slice(0, cardNum);
//   const newCards = [...gameCards, ...gameCards].map((ele) => ({
//     ...ele,
//     id: uniqid(),
//     flip: false,
//     matched: false,
//   }));
//   setCards(shuffleItems(...newCards));
//   setFirstPick(null);
//   setSecondPick(null);
//   setTurns(0);
//   setSize(GRID_COLUMN_SIZE[difficulty]);
// };
