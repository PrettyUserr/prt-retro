import { createContext, useContext, useState } from "react";

const DesktopContext = createContext();

export function DesktopProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (app) => {
    setOpenWindows((prev) => {
      if (prev.some((window) => window.id === app.id)) {
        return prev;
      }

      return [...prev, app];
    });
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((window) => window.id !== id));
  };

  return (
    <DesktopContext.Provider
      value={{
        selectedIcon,
        setSelectedIcon,
        openWindows,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
