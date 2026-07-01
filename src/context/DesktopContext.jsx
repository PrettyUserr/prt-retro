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
    setHighestZ((prev) => {
      const nextZ = prev + 1;

      setOpenWindows((windows) =>
        windows.map((win) =>
          win.id === id
            ? {
                ...win,
                z: nextZ,
                minimized: false,
              }
            : win,
        ),
      );

      return nextZ;
    });
  };

  const openWindow = (app) => {
    const existing = openWindows.find((win) => win.id === app.id);

    if (existing) {
      bringToFront(app.id);
      return;
    }

    const offset = openWindows.length * CASCADE_OFFSET;

    const desktopWidth = window.innerWidth;
    const desktopHeight = window.innerHeight - 54;

    const x = Math.max(
      40,
      Math.round((desktopWidth - WINDOW_WIDTH) / 2 + offset),
    );

    const y = Math.max(
      40,
      Math.round((desktopHeight - WINDOW_HEIGHT) / 2 + offset),
    );

    setHighestZ((prev) => {
      const nextZ = prev + 1;

      setOpenWindows((windows) => [
        ...windows,
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
    setOpenWindows((windows) => windows.filter((win) => win.id !== id));
  };

  const minimizeWindow = (id) => {
    setOpenWindows((windows) =>
      windows.map((win) =>
        win.id === id
          ? {
              ...win,
              minimized: true,
            }
          : win,
      ),
    );
  };

  const restoreWindow = (id) => {
    bringToFront(id);
  };

  const moveWindow = (id, x, y) => {
    const desktopWidth = window.innerWidth;
    const desktopHeight = window.innerHeight - 54;

    // Keep part of the window visible at all times
    const minX = -WINDOW_WIDTH + 180;
    const maxX = desktopWidth - 180;

    const minY = 0;
    const maxY = desktopHeight - 40;

    const clampedX = Math.max(minX, Math.min(x, maxX));
    const clampedY = Math.max(minY, Math.min(y, maxY));

    setOpenWindows((windows) =>
      windows.map((win) =>
        win.id === id
          ? {
              ...win,
              x: clampedX,
              y: clampedY,
            }
          : win,
      ),
    );
  };

  return (
    <DesktopContext.Provider
      value={{
        selectedIcon,
        setSelectedIcon,

        openWindows,

        openWindow,
        closeWindow,

        minimizeWindow,
        restoreWindow,

        bringToFront,

        moveWindow,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
