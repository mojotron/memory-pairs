import React, { createContext, useEffect, useReducer } from "react";
// helpers
import pickPlayingCards from "../helpers/pickPlayingCards";
// types
import { CardType } from "../types";

export enum GridSizeEnum {
  small = "small",
  normal = "normal",
  large = "large",
}

export enum EmojiSetEnum {
  smileys = "smileys",
  animals = "animals",
  fruits = "fruits",
  foods = "foods",
  vehicles = "vehicles",
}

type CardPick = { id: number; cardName: string };

type GameContextState = {
  isRunning: boolean;
  gridSize: GridSizeEnum;
  emojiSet: EmojiSetEnum;
  turns: number;
  cards: CardType[];
  firstPick: CardPick | null;
  secondPick: CardPick | null;
  isWin: boolean;
};

type Action =
  | {
      type: "SETUP_NEW_GAME";
      payload: { gridSize: GridSizeEnum; emojiSet: EmojiSetEnum };
    }
  | {
      type: "FLIP_CARD";
      payload: { cardId: number; firstPick: boolean; cardName: string };
    }
  | { type: "UPDATE_TURN_NO_MATCH" }
  | { type: "UPDATE_TURN_FOUND_MATCH"; payload: { winCondition: boolean } }
  | { type: "END_GAME" };

const initialState = {
  isRunning: false,
  gridSize: GridSizeEnum.small,
  emojiSet: EmojiSetEnum.smileys,
  turns: 1,
  cards: [],
  firstPick: null,
  secondPick: null,
  isWin: false,
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
        turns: action.payload.winCondition ? state.turns : state.turns + 1,
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
        isWin: action.payload.winCondition,
      };
    case "END_GAME":
      return {
        ...initialState,
        isRunning: false,
        isWin: false,
        gridSize: state.gridSize,
        emojiSet: state.emojiSet,
      };
    default:
      return state;
  }
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    if (state.secondPick === null) return;
    const timer = setTimeout(() => {
      if (state.firstPick?.cardName === state.secondPick?.cardName) {
        // win condition
        const winCondition = state.cards.every(
          (card) =>
            card.matched === true || card.name === state.secondPick?.cardName
        );

        dispatch({
          type: "UPDATE_TURN_FOUND_MATCH",
          payload: { winCondition },
        });
      } else {
        dispatch({ type: "UPDATE_TURN_NO_MATCH" });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [state.firstPick, state.secondPick, state.cards]);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
