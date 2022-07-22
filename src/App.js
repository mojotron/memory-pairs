import { useCallback, useEffect, useState } from "react";
import cardsData from "./cardsData.json";
import uniqid from "uniqid";
import shuffleItems from "./helpers/shuffleItems";
import Grid from "./components/Grid";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);

  const matchCards = useCallback(() => {
    const card1 = cards.find((card) => card.id === firstPick);
    const card2 = cards.find((card) => card.id === secondPick);
    return card1.name === card2.name;
  }, [firstPick, secondPick, cards]);

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
    const newCards = [...cardsData, ...cardsData].map((ele) => ({
      ...ele,
      id: uniqid(),
      flip: false,
      matched: false,
    }));
    setCards(shuffleItems(...newCards));
    setTurns(0);
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

  const handleTurn = (id) => {
    !firstPick ? setFirstPick(id) : setSecondPick(id);
  };

  return (
    <div className="App">
      <p className="counter">{turns}</p>
      <Grid cards={cards} handleSelectCard={handleSelectCard} />
      <button className="btn" type="button" onClick={shuffleCards}>
        New Game
      </button>
      {secondPick && <div className="overlay"></div>}
    </div>
  );
};

export default App;
