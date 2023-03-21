import {
  TfiLayoutGrid2,
  TfiLayoutGrid3,
  TfiLayoutGrid4,
} from "react-icons/tfi";
import "./styles/NewGame.css";

const NewGame = () => {
  return (
    <div className="NewGame">
      <h1 className="NewGame__headings">Memory Pairs</h1>
      <div className="NewGame__options">
        <button className="NewGame__options__btn">
          <TfiLayoutGrid2 color="var(--white)" size={20} title="small grid" />
        </button>
        <button className="NewGame__options__btn">
          <TfiLayoutGrid3 color="var(--white)" size={25} title="normal grid" />
        </button>
        <button className="NewGame__options__btn">
          <TfiLayoutGrid4 color="var(--white)" size={30} title="large grid" />
        </button>
      </div>
      <div></div>

      <button className="btn">Start New Game</button>
    </div>
  );
};

export default NewGame;
