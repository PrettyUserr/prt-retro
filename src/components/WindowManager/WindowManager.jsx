import Window from "../Window/Window";
import { useDesktop } from "../../context/DesktopContext";

function WindowManager() {
  const { openWindows } = useDesktop();

  return (
    <>
      {openWindows
        .filter((window) => !window.minimized)
        .map((window) => {
          const AppComponent = window.component;

          return (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              x={window.x}
              y={window.y}
              z={window.z}
            >
              <AppComponent />
            </Window>
          );
        })}
    </>
  );
}

export default WindowManager;
