import { createContext, useContext, useState } from "react";

const DesktopContext = createContext();

export function DesktopProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <DesktopContext.Provider
      value={{
        selectedIcon,
        setSelectedIcon,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
