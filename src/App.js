import { useState } from "react";
import cardsData from "./cardsData.json";
import uniqid from "uniqid";
import shuffleItems from "./helpers/shuffleItems";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const newCards = [...cardsData, ...cardsData].map((ele) => ({
      ...ele,
      id: uniqid(),
    }));
    setCards(shuffleItems(...newCards));
    setTurns(0);
  };

  const handleNewGameBtn = () => {
    shuffleCards();
  };

  return (
    <div className="App">
      {cards.map((card) => (
        <p key={card.id}>{card.emoji}</p>
      ))}
      <button className="btn" type="button" onClick={handleNewGameBtn}>
        New Game
      </button>
    </div>
  );
};

export default App;
