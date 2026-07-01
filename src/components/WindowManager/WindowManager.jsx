import { useDesktop } from "../../context/DesktopContext";
import Window from "../Window/Window";

function WindowManager() {
  const { openWindows } = useDesktop();

  return (
    <>
      {openWindows.map((app) => {
        const AppComponent = app.component;

        return (
          <Window key={app.id} id={app.id} title={app.title}>
            <AppComponent />
          </Window>
        );
      })}
    </>
  );
}

export default WindowManager;
