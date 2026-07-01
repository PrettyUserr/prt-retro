import { createContext, useContext, useState } from "react";
import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  CASCADE_OFFSET,
  START_Z_INDEX,
} from "../config/windowConfig";

const DesktopContext = createContext();

export function DesktopProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);
  const [highestZ, setHighestZ] = useState(START_Z_INDEX);

  const openWindow = (app) => {
    setOpenWindows((prev) => {
      const existing = prev.find((window) => window.id === app.id);

      if (existing) {
        return prev.map((window) =>
          window.id === app.id ? { ...window, z: highestZ + 1 } : window,
        );
      }

      const count = prev.length;

      const x = (window.innerWidth - WINDOW_WIDTH) / 2 + count * CASCADE_OFFSET;

      const y =
        (window.innerHeight - WINDOW_HEIGHT) / 2 + count * CASCADE_OFFSET;

      return [
        ...prev,
        {
          ...app,
          x,
          y,
          z: highestZ + 1,
          minimized: false,
        },
      ];
    });

    setHighestZ((z) => z + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id));
  };

  const focusWindow = (id) => {
    setHighestZ((prev) => {
      const next = prev + 1;

      setOpenWindows((windows) =>
        windows.map((window) =>
          window.id === id ? { ...window, z: next } : window,
        ),
      );

      return next;
    });
  };

  return (
    <DesktopContext.Provider
      value={{
        selectedIcon,
        setSelectedIcon,

        openWindows,
        openWindow,
        closeWindow,
        focusWindow,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
