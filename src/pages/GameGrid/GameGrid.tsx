import { useGameContext } from "../../hooks/useGameContext";

const GameGrid = () => {
  const { state } = useGameContext();
  return (
    <div>
      {state.cards.map((card) => (
        <div role="gridcell" key={card.id}>
          {card.emoji}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
