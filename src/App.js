import "./styles/App.css";
import { useGameContext } from "./hooks/useGameContext.tsx";
import NewGame from "./pages/NewGame/NewGame.tsx";
import GameGrid from "./pages/GameGrid/GameGrid";

const App = () => {
  const { state, dispatch } = useGameContext();
  return (
    <div className="App">
      {!state.isRunning ? <NewGame /> : <GameGrid />}
      {state.isRunning && (
        <button
          onClick={() => dispatch({ type: "END_GAME" })}
          className="btn"
          style={{
            position: "absolute",
            top: "2.5rem",
            right: "2.5rem",
            padding: "0.5rem",
            color: "yellow",
          }}
        >
          RESET
        </button>
      )}
    </div>
  );
};

export default App;
