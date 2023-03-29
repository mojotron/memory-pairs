import { useGameContext } from "../../hooks/useGameContext";
import Confetti from "react-confetti";
import EndGameBtn from "../../components/EndGameBtn";
import LazyText from "../../components/LazyText";
// styles
import "./styles/GameWon.css";
// temp

const GameWon = () => {
  const { state } = useGameContext();

  return (
    <div className="GameWon">
      <Confetti />
      <LazyText text="Congratulation!" />
      <h3>Took you {state.turns} turns to finish!</h3>
      <EndGameBtn text="New Game" topRightPosition={false} />
    </div>
  );
};

export default GameWon;
