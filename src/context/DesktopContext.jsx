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

  const bringToFront = (id) => {
    setHighestZ((prevZ) => {
      const nextZ = prevZ + 1;

      setOpenWindows((prevWindows) =>
        prevWindows.map((window) =>
          window.id === id
            ? {
                ...window,
                z: nextZ,
                minimized: false,
              }
            : window,
        ),
      );

      return nextZ;
    });
  };

  const openWindow = (app) => {
    const existing = openWindows.find((window) => window.id === app.id);

    if (existing) {
      bringToFront(app.id);
      return;
    }

    const offset = openWindows.length * CASCADE_OFFSET;

    const x = (window.innerWidth - WINDOW_WIDTH) / 2 + offset;

    const y = (window.innerHeight - WINDOW_HEIGHT) / 2 + offset;

    setHighestZ((prevZ) => {
      const nextZ = prevZ + 1;

      setOpenWindows((prevWindows) => [
        ...prevWindows,
        {
          ...app,
          x,
          y,
          z: nextZ,
          minimized: false,
        },
      ]);

      return nextZ;
    });
  };

  const closeWindow = (id) => {
    setOpenWindows((prevWindows) =>
      prevWindows.filter((window) => window.id !== id),
    );
  };

  const moveWindow = (id, x, y) => {
    setOpenWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.id === id
          ? {
              ...window,
              x,
              y,
            }
          : window,
      ),
    );
  };

  const minimizeWindow = (id) => {
    setOpenWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.id === id
          ? {
              ...window,
              minimized: true,
            }
          : window,
      ),
    );
  };

  const restoreWindow = (id) => {
    bringToFront(id);
  };

  return (
    <DesktopContext.Provider
      value={{
        selectedIcon,
        setSelectedIcon,

        openWindows,

        openWindow,
        closeWindow,

        bringToFront,

        moveWindow,

        minimizeWindow,

        restoreWindow,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
