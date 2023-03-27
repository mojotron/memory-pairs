// style
import "./styles/App.css";
// hooks
import { useGameContext } from "./hooks/useGameContext";
// components
import NewGame from "./pages/NewGame/NewGame";
import GameGrid from "./pages/GameGrid/GameGrid";
import EndGameBtn from "./components/EndGameBtn";
import Footer from "./components/Footer";
import Confetti from "react-confetti";

const App = () => {
  const { state } = useGameContext();
  return (
    <div className="App">
      {state.isWin && <Confetti />}
      {state.isRunning && <h3>Turn: {state.turns}</h3>}
      {!state.isRunning ? <NewGame /> : <GameGrid />}
      {state.isRunning && <EndGameBtn />}
      <Footer />
    </div>
  );
};

export default App;
