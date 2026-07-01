import { createContext, useContext, useState } from "react";

const DesktopContext = createContext();

export function DesktopProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const [openWindows, setOpenWindows] = useState([]);

  function openWindow(app) {
    setOpenWindows((current) => {
      const exists = current.find((window) => window.id === app.id);

      if (exists) {
        return current;
      }

      return [...current, app];
    });
  }

  function closeWindow(id) {
    setOpenWindows((current) => current.filter((window) => window.id !== id));
  }

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
