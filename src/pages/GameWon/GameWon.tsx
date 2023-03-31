import { useGameContext } from "../../hooks/useGameContext";
import Confetti from "react-confetti";
import EndGameBtn from "../../components/EndGameBtn";
import LazyText from "../../components/LazyText";
// styles
import "./styles/GameWon.css";
// sound
import applauseSound from "../../sounds/applause.mp3";
import { useEffect } from "react";

const GameWon = () => {
  const { state } = useGameContext();

  const applauseEffect = () => new Audio(applauseSound).play();

  useEffect(() => {
    applauseEffect();
  }, []);

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
