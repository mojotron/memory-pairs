import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Footer from "./components/Footer";
import { GameContextProvider } from "./context/GameContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
      {/* <Footer /> */}
    </GameContextProvider>
  </React.StrictMode>
);
