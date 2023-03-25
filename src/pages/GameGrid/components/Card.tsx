import { useGameContext } from "../../../hooks/useGameContext";
import "../styles/Card.css";

type CardProps = {
  id: number;
  emoji: string;
  flip: boolean;
  matched: boolean;
};

const Card = ({ id, emoji, flip, matched }: CardProps) => {
  const { state, dispatch } = useGameContext();
  return (
    <div className="Card" role="article">
      {flip ? (
        <div className="Card__front-side" role="gridcell">
          {emoji}
        </div>
      ) : (
        <div
          className="Card__back-side"
          role="gridcell"
          onClick={() => {
            if (!state.secondPick) {
              dispatch({
                type: "FLIP_CARD",
                payload: { cardId: id, firstPick: state.firstPick === null },
              });
            }
          }}
        ></div>
      )}
    </div>
  );
};

export default Card;
