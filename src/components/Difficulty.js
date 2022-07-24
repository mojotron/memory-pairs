import { useState } from "react";
import cogwheelImg from "../images/cogwheel.svg";
import "../styles/Difficulty.css";

const Difficulty = ({ difficulty, setDifficulty }) => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleClick = () => {
    setDisplayForm((oldValue) => !oldValue);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setDifficulty(value);
  };

  return (
    <div className="Difficulty">
      <button
        className="Difficulty__btn"
        onClick={handleClick}
        data-testid="difficulty"
        type="button"
      >
        <img
          className="Difficulty__btn__img"
          src={cogwheelImg}
          alt="cogwheel"
        />
      </button>

      {displayForm && (
        <form className="Difficulty__form" aria-label="form">
          <h2>Game difficulty</h2>
          <div>
            <input
              id="easy"
              type="radio"
              name="difficulty"
              value="easy"
              checked={difficulty === "easy"}
              onChange={handleChange}
            />
            <label htmlFor="easy">easy</label>
          </div>

          <div>
            <input
              id="normal"
              type="radio"
              name="difficulty"
              value="normal"
              checked={difficulty === "normal"}
              onChange={handleChange}
            />
            <label htmlFor="normal">normal</label>
          </div>

          <div>
            <input
              id="hard"
              type="radio"
              name="difficulty"
              value="hard"
              checked={difficulty === "hard"}
              onChange={handleChange}
            />
            <label htmlFor="easy">hard</label>
          </div>
        </form>
      )}
    </div>
  );
};

export default Difficulty;
