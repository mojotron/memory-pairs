import React, { createContext, useEffect, useReducer } from "react";
// helpers
import pickPlayingCards from "../helpers/pickPlayingCards";
// types
import { CardType } from "../types";

type GameContextState = {
  isRunning: boolean;
  gridSize: string; //"small" | "normal" | "large";
  emojiSet: string; //"faces" | "animals" | "fruits" | "foods" | "vehicles";
  turns: number;
  cards: CardType[];
  firstPick: number | null;
  secondPick: number | null;
};

type Action =
  | {
      type: "SETUP_NEW_GAME";
      payload: { gridSize: string; emojiSet: string };
    }
  | { type: "FLIP_CARD"; payload: { cardId: number; firstPick: boolean } };

const initialState = {
  isRunning: false,
  gridSize: "small",
  emojiSet: "smileys",
  turns: 0,
  cards: [],
  firstPick: null,
  secondPick: null,
};

export const GameContext = createContext<{
  state: GameContextState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

interface GameContextProviderProps {
  children: React.ReactNode;
}

const gameReducer = (state: GameContextState, action: Action) => {
  switch (action.type) {
    case "SETUP_NEW_GAME":
      return {
        ...initialState,
        ...action.payload,
        isRunning: true,
        cards: pickPlayingCards(
          action.payload.gridSize,
          action.payload.emojiSet
        ),
      };
    case "FLIP_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.cardId ? { ...card, flip: true } : card
        ),
        firstPick: action.payload.firstPick
          ? action.payload.cardId
          : state.firstPick,
        secondPick: !action.payload.firstPick
          ? action.payload.cardId
          : state.secondPick,
      };
    default:
      return state;
  }
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  console.log(state);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Second pick active");
      // TODO dispetch turn
    }, 1500);

    return () => clearTimeout(timer);
  }, [state.secondPick]);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
