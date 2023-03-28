import { useGameContext } from "../../hooks/useGameContext";
import Confetti from "react-confetti";
import EndGameBtn from "../../components/EndGameBtn";
// styles
import "./styles/GameWon.css";
// temp
import { useEffect, useState } from "react";

const LazyText = ({ text }: { text: string }) => {
  const [result, setResult] = useState<
    { letter: string; color: string; size: string }[]
  >([]);
  const [letters, setLetters] = useState(text.split(""));

  useEffect(() => {
    if (letters.length === 0) return;

    const timer = setTimeout(() => {
      const newLetters = [...letters];
      const newResult = newLetters.shift() || "";
      setLetters(newLetters);
      setResult((oldValue) => [
        ...oldValue,
        { letter: newResult, color: "blue", size: "1rem" },
      ]);
    }, 100);

    return () => clearTimeout(timer);
  }, [letters]);

  return (
    <h2>
      {result.map((ele, i) => (
        <span key={i} style={{ color: ele.color, fontSize: ele.size }}>
          {ele.letter}
        </span>
      ))}
    </h2>
  );
};

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
