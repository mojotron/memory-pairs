import { useState } from "react";
import {
  TfiLayoutGrid2,
  TfiLayoutGrid3,
  TfiLayoutGrid4,
} from "react-icons/tfi";
import { useGameContext } from "../../hooks/useGameContext";
import OptionButton from "./components/OptionButton";
import "./styles/NewGame.css";
// enums
import { GridSizeEnum, EmojiSetEnum } from "../../context/GameContext";

const NewGame = () => {
  const { state, dispatch } = useGameContext();

  const [gridSize, setGridSize] = useState<GridSizeEnum>(state.gridSize);
  const [emojiSet, setEmojiSet] = useState<EmojiSetEnum>(state.emojiSet);

  const handleGridChange = (e: React.MouseEvent<HTMLElement>) =>
    setGridSize(e.currentTarget.title as GridSizeEnum);

  const handleEmojiSetChange = (e: React.MouseEvent<HTMLElement>) =>
    setEmojiSet(e.currentTarget.title as EmojiSetEnum);

  const handleStartNewGame = () => {
    dispatch({
      type: "SETUP_NEW_GAME",
      payload: { gridSize, emojiSet },
    });
  };

  return (
    <div className="NewGame">
      <h1 className="NewGame__heading">Memory Pairs</h1>

      <div className="NewGame__options">
        <h2 className="NewGame__options__heading">Choose Grid Size</h2>

        <div className="NewGame__options__buttons">
          <OptionButton
            icon={<TfiLayoutGrid2 color="var(--white)" size={20} />}
            active={gridSize}
            title={GridSizeEnum.small}
            handleClick={handleGridChange}
          />
          <OptionButton
            icon={<TfiLayoutGrid3 color="var(--white)" size={25} />}
            active={gridSize}
            title={GridSizeEnum.normal}
            handleClick={handleGridChange}
          />
          <OptionButton
            icon={<TfiLayoutGrid4 color="var(--white)" size={30} />}
            active={gridSize}
            title={GridSizeEnum.large}
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
            title={EmojiSetEnum.smileys}
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🦝"}
            active={emojiSet}
            title={EmojiSetEnum.animals}
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🍍"}
            active={emojiSet}
            title={EmojiSetEnum.fruits}
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🍩"}
            active={emojiSet}
            title={EmojiSetEnum.foods}
            handleClick={handleEmojiSetChange}
          />
          <OptionButton
            icon={"🚀"}
            active={emojiSet}
            title={EmojiSetEnum.vehicles}
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
