import "./styles/App.css";
import { useGameContext } from "./hooks/useGameContext.tsx";
import NewGame from "./pages/NewGame/NewGame.tsx";
import GameGrid from "./pages/GameGrid/GameGrid";

const App = () => {
  const { state } = useGameContext();

  // const matchCards = useCallback(() => {
  //   const card1 = cards.find((card) => card.id === firstPick);
  //   const card2 = cards.find((card) => card.id === secondPick);
  //   return card1.name === card2.name;
  // }, [firstPick, secondPick, cards]);

  // useEffect(() => {
  //   if (!secondPick) return;
  //   setTurns((oldValue) => oldValue + 1);
  //   const timer = setTimeout(() => {
  //     if (matchCards()) {
  //       // picked cards match change state of those cards
  //       setCards((oldValue) => {
  //         return oldValue.map((card) => {
  //           if (card.id === firstPick || card.id === secondPick) {
  //             return { ...card, matched: true };
  //           } else {
  //             return card;
  //           }
  //         });
  //       });
  //     } else {
  //       setCards((oldValue) => {
  //         return oldValue.map((card) =>
  //           card.matched ? card : { ...card, flip: false }
  //         );
  //       });
  //     }
  //     setFirstPick(null);
  //     setSecondPick(null);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, [secondPick, firstPick, matchCards]);

  // const handleSelectCard = (id) => {
  //   setCards((oldCards) => {
  //     return oldCards.map((card) => {
  //       if (card.id === id) return { ...card, flip: true };
  //       else return card;
  //     });
  //   });
  //   handleTurn(id);
  // };

  // const handleTurn = (id) =>
  //   !firstPick ? setFirstPick(id) : setSecondPick(id);

  return (
    <div className="App">
      {!state.isRunning ? <NewGame /> : <GameGrid />}

      {/*

      {cards.length > 0 && <p className="App__counter">Turn: {turns}</p>}

      <Grid cards={cards} handleSelectCard={handleSelectCard} size={size} />


      {secondPick && <div className="App__overlay"></div>} */}
    </div>
  );
};

export default App;
