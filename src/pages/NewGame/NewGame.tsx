import { useState } from "react";
import {
  TfiLayoutGrid2,
  TfiLayoutGrid3,
  TfiLayoutGrid4,
} from "react-icons/tfi";
import OptionButton from "./components/OptionButton";
import "./styles/NewGame.css";

const NewGame = () => {
  const [gridSize, setGridSize] = useState("small");
  const [cardTheme, setCardTheme] = useState("smileys");

  console.log(gridSize, cardTheme);

  const handleGridChange = (e: React.MouseEvent<HTMLElement>) =>
    setGridSize(e.currentTarget.title);

  const handleThemeChange = (e: React.MouseEvent<HTMLElement>) =>
    setCardTheme(e.currentTarget.title);

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
            active={cardTheme}
            title="smileys"
            handleClick={handleThemeChange}
          />
          <OptionButton
            icon={"🦝"}
            active={cardTheme}
            title="animals"
            handleClick={handleThemeChange}
          />
          <OptionButton
            icon={"🍍"}
            active={cardTheme}
            title="fruits"
            handleClick={handleThemeChange}
          />
          <OptionButton
            icon={"🍩"}
            active={cardTheme}
            title="foods"
            handleClick={handleThemeChange}
          />
          <OptionButton
            icon={"🚀"}
            active={cardTheme}
            title="vehicles"
            handleClick={handleThemeChange}
          />
        </div>
      </div>

      <button className="btn">Start New Game</button>
    </div>
  );
};

export default NewGame;
