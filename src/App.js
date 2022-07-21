import { useEffect, useState } from "react";
import cardsData from "./cardsData.json";
import uniqid from "uniqid";
import shuffleItems from "./helpers/shuffleItems";
import Grid from "./components/Grid";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCards((oldCards) =>
        oldCards.map((card) => ({ ...card, flip: false }))
      );
      setFirstPick(false);
      setSecondPick(false);
    }, 1000);
  }, [secondPick]);

  console.log(firstPick, secondPick);

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

  const handleNewGameBtn = () => {
    shuffleCards();
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
      <p>{turns}</p>
      <Grid cards={cards} handleSelectCard={handleSelectCard} />
      <button className="btn" type="button" onClick={handleNewGameBtn}>
        New Game
      </button>
    </div>
  );
};

export default App;
