import { useGameContext } from "../../hooks/useGameContext";
import Card from "./components/Card";
import "./styles/GameGrid.css";
import GRID_COLUMNS from "../../constants/gridColumns";

const GameGrid = () => {
  const { state } = useGameContext();
  return (
    <div
      className="GameGrid"
      style={{
        gridTemplateColumns: `repeat(${GRID_COLUMNS[state.gridSize]}, 1fr)`,
      }}
    >
      {state.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          emoji={card.emoji}
          flip={card.flip}
          //flip={true}
          matched={card.matched}
        />
      ))}
    </div>
  );
};

export default GameGrid;
