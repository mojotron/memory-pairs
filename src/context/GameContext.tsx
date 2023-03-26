import React, { createContext, useEffect, useReducer } from "react";
// helpers
import pickPlayingCards from "../helpers/pickPlayingCards";
// types
import { CardType } from "../types";

type CardPick = { id: number; cardName: string };
type GameContextState = {
  isRunning: boolean;
  gridSize: string; //"small" | "normal" | "large";
  emojiSet: string; //"faces" | "animals" | "fruits" | "foods" | "vehicles";
  turns: number;
  cards: CardType[];
  firstPick: CardPick | null;
  secondPick: CardPick | null;
};

type Action =
  | {
      type: "SETUP_NEW_GAME";
      payload: { gridSize: string; emojiSet: string };
    }
  | {
      type: "FLIP_CARD";
      payload: { cardId: number; firstPick: boolean; cardName: string };
    }
  | { type: "UPDATE_TURN_NO_MATCH" }
  | { type: "UPDATE_TURN_FOUND_MATCH" }
  | { type: "END_GAME" };

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
          ? { id: action.payload.cardId, cardName: action.payload.cardName }
          : state.firstPick,
        secondPick: !action.payload.firstPick
          ? { id: action.payload.cardId, cardName: action.payload.cardName }
          : state.secondPick,
      };
    case "UPDATE_TURN_NO_MATCH":
      return {
        ...state,
        turns: state.turns + 1,
        firstPick: null,
        secondPick: null,
        cards: state.cards.map((card) => {
          if (
            card.id === state.firstPick?.id ||
            card.id === state.secondPick?.id
          ) {
            return { ...card, flip: false };
          } else {
            return card;
          }
        }),
      };
    case "UPDATE_TURN_FOUND_MATCH":
      return {
        ...state,
        turns: state.turns + 1,
        firstPick: null,
        secondPick: null,
        cards: state.cards.map((card) => {
          if (
            card.id === state.firstPick?.id ||
            card.id === state.secondPick?.id
          ) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        }),
      };
    case "END_GAME":
      return {
        ...initialState,
        isRunning: false,
        gridSize: state.gridSize,
        emojiSet: state.emojiSet,
      };
    default:
      return state;
  }
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  console.log(state);

  useEffect(() => {
    if (state.secondPick === null) return;
    const timer = setTimeout(() => {
      if (state.firstPick?.cardName === state.secondPick?.cardName) {
        console.log("PAIR");
        dispatch({ type: "UPDATE_TURN_FOUND_MATCH" });
      } else {
        dispatch({ type: "UPDATE_TURN_NO_MATCH" });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [state.firstPick, state.secondPick]);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
