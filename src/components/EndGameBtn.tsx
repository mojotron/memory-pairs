import { useGameContext } from "../hooks/useGameContext";

type EndGameBtnProps = {
  text: string;
  topRightPosition: boolean;
};

const EndGameBtn = ({ text, topRightPosition }: EndGameBtnProps) => {
  const { dispatch } = useGameContext();

  const topRightStyle = {
    position: "absolute",
    top: "2rem",
    right: "2rem",
  } as React.HTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className="btn btn--yellow"
      style={topRightPosition ? topRightStyle : undefined}
      type="button"
      onClick={() => dispatch({ type: "END_GAME" })}
    >
      {text}
    </button>
  );
};

export default EndGameBtn;
