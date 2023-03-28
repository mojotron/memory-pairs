// style
import "./styles/App.css";
// hooks
import { useGameContext } from "./hooks/useGameContext";
// components
import NewGame from "./pages/NewGame/NewGame";
import GameGrid from "./pages/GameGrid/GameGrid";
import GameWon from "./pages/GameWon/GameWon";
import EndGameBtn from "./components/EndGameBtn";
import Footer from "./components/Footer";

const App = () => {
  const { state } = useGameContext();
  return (
    <div className="App">
      {state.isWin && <GameWon />}
      {!state.isRunning && <NewGame />}
      {state.isRunning && !state.isWin && (
        <>
          <GameGrid />
          <EndGameBtn text="End Game" topRightPosition={true} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
