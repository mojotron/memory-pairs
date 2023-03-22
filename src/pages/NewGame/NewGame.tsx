import { useState } from "react";
import {
  TfiLayoutGrid2,
  TfiLayoutGrid3,
  TfiLayoutGrid4,
} from "react-icons/tfi";
import { useGameContext } from "../../hooks/useGameContext";
import OptionButton from "./components/OptionButton";
import "./styles/NewGame.css";

const NewGame = () => {
  const { state, dispatch } = useGameContext();

  const [gridSize, setGridSize] = useState(state.gridSize);
  const [emojiSet, setEmojiSet] = useState(state.emojiSet);

  const handleGridChange = (e: React.MouseEvent<HTMLElement>) =>
    setGridSize(e.currentTarget.title);

  const handleEmojiSetChange = (e: React.MouseEvent<HTMLElement>) =>
    setEmojiSet(e.currentTarget.title);

  const handleStartNewGame = () => {};

  return (
    <div className="NewGame">
      <h1 className="NewGame__heading">Memory Pairs</h1>

      <div className="NewGame__options">
        <h2 className="NewGame__options__heading">Choose Grid Size</h2>

        <div className="NewGame__options__buttons">
          <OptionButton
            icon={<TfiLayoutGrid2 color="var(--white)" size={20} />}
            active={gridSize}
            title="small"
            handleClick={handleGridChange}
          />
          <OptionButton
            icon={<TfiLayoutGrid3 color="var(--white)" size={25} />}
            active={gridSize}
            title="normal"
            handleClick={handleGridChange}
          />
          <OptionButton
            icon={<TfiLayoutGrid4 color="var(--white)" size={30} />}
            active={gridSize}
            title="large"
            handleClick={handleGridChange}
          />
        </div>
      </div>

      <div className="NewGame__options">
        <h2 className="NewGame__options__heading">Choose Card Theme</h2>

        <div className="NewGame__options__buttons">
          <OptionButton
            icon={"😎"}
            active={emojiSet}
            title="smileys"
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🦝"}
            active={emojiSet}
            title="animals"
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🍍"}
            active={emojiSet}
            title="fruits"
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🍩"}
            active={emojiSet}
            title="foods"
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🚀"}
            active={emojiSet}
            title="vehicles"
            handleClick={handleEmojiSetChange}
          />
        </div>
      </div>

      <button className="btn" onClick={handleStartNewGame}>
        Start New Game
      </button>
    </div>
  );
};

export default NewGame;
