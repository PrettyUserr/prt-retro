import Window from "../Window/Window";
import { useDesktop } from "../../context/DesktopContext";

function WindowManager() {
  const { openWindows } = useDesktop();

  return (
    <>
      {openWindows.map((app) => {
        const Component = app.component;

        return (
          <Window key={app.id} id={app.id} title={app.title}>
            <Component />
          </Window>
        );
      })}
    </>
  );
}

export default WindowManager;
