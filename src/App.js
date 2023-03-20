import { useCallback, useEffect, useState } from "react";
import cardsData from "./data/cardsData.json";
import uniqid from "uniqid";
import shuffleItems from "./helpers/shuffleItems.ts";
import Grid from "./components/Grid";
import Difficulty from "./components/Difficulty";
import "./styles/App.css";
import { GAME_DIFFICULTY_CARD_NUM, GRID_COLUMN_SIZE } from "./data/config";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [difficulty, setDifficulty] = useState("normal");
  const [size, setSize] = useState(4);

  const matchCards = useCallback(() => {
    const card1 = cards.find((card) => card.id === firstPick);
    const card2 = cards.find((card) => card.id === secondPick);
    return card1.name === card2.name;
  }, [firstPick, secondPick, cards]);

  useEffect(() => shuffleCards, []);

  useEffect(() => {
    if (!secondPick) return;
    setTurns((oldValue) => oldValue + 1);
    const timer = setTimeout(() => {
      if (matchCards()) {
        // picked cards match change state of those cards
        setCards((oldValue) => {
          return oldValue.map((card) => {
            if (card.id === firstPick || card.id === secondPick) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        setCards((oldValue) => {
          return oldValue.map((card) =>
            card.matched ? card : { ...card, flip: false }
          );
        });
      }
      setFirstPick(null);
      setSecondPick(null);
    }, 1500);

    return () => clearTimeout(timer);
  }, [secondPick, firstPick, matchCards]);

  const shuffleCards = () => {
    const cardNum = GAME_DIFFICULTY_CARD_NUM[difficulty];
    const gameCards = [...cardsData].slice(0, cardNum);
    const newCards = [...gameCards, ...gameCards].map((ele) => ({
      ...ele,
      id: uniqid(),
      flip: false,
      matched: false,
    }));
    setCards(shuffleItems(...newCards));
    setFirstPick(null);
    setSecondPick(null);
    setTurns(0);
    setSize(GRID_COLUMN_SIZE[difficulty]);
  };

  const handleSelectCard = (id) => {
    setCards((oldCards) => {
      return oldCards.map((card) => {
        if (card.id === id) return { ...card, flip: true };
        else return card;
      });
    });
    handleTurn(id);
  };

  const handleTurn = (id) =>
    !firstPick ? setFirstPick(id) : setSecondPick(id);

  return (
    <div className="App">
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />

      <h1 className="App__heading">Memory Pairs</h1>

      {cards.length > 0 && <p className="App__counter">Turn: {turns}</p>}

      <Grid cards={cards} handleSelectCard={handleSelectCard} size={size} />

      <button className="btn" type="button" onClick={shuffleCards}>
        New Game
      </button>

      {secondPick && <div className="App__overlay"></div>}
    </div>
  );
};

export default App;
