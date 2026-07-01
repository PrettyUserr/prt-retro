import { useDesktop } from "../../context/DesktopContext";
import Window from "../Window/Window";

function WindowManager() {
  const { openWindows } = useDesktop();

  return (
    <>
      {openWindows.map((app) => {
        const Component = app.component;

        return (
          <Window key={app.id} title={app.title}>
            <Component />
          </Window>
        );
      })}
    </>
  );
}

export default WindowManager;
