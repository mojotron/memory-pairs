import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GameContextProvider } from "../context/GameContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <GameContextProvider>{children}</GameContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
