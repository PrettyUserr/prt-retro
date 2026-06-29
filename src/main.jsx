import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/vt323";
import "@fontsource/press-start-2p";
import "./styles/globals.css";

import App from "./App";
import { DesktopProvider } from "./context/DesktopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DesktopProvider>
      <App />
    </DesktopProvider>
  </React.StrictMode>,
);
