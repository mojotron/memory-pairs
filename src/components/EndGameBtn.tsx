import { useGameContext } from "../hooks/useGameContext";

const EndGameBtn = () => {
  const { dispatch } = useGameContext();

  return (
    <button
      className="btn btn--yellow"
      type="button"
      onClick={() => dispatch({ type: "END_GAME" })}
    >
      End Game
    </button>
  );
};

export default EndGameBtn;
