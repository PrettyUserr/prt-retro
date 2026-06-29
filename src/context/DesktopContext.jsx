import { createContext, useContext, useState } from "react";

const DesktopContext = createContext();

export function DesktopProvider({ children }) {
  const [windows] = useState([]);

  return (
    <DesktopContext.Provider
      value={{
        windows,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
