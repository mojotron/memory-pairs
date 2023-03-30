import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GameContext } from "../context/GameContext";
import cardsMock from "../mocks/cardsMock";
import { GridSizeEnum, EmojiSetEnum } from "../context/GameContext";

export const fakeDispatch = jest.fn();

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <GameContext.Provider
      value={{
        state: {
          isRunning: false,
          gridSize: GridSizeEnum.small,
          emojiSet: EmojiSetEnum.smileys,
          turns: 0,
          cards: cardsMock,
          firstPick: null,
          secondPick: null,
          isWin: false,
        },
        dispatch: fakeDispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
