import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GameContext } from "../context/GameContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <GameContext.Provider
      value={{
        state: {
          isRunning: false,
          gridSize: "small",
          emojiSet: "smileys",
          turns: 0,
          cards: [],
          firstPick: null,
          secondPick: null,
        },
        dispatch: jest.fn(),
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
