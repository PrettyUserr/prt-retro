import Wallpaper from "../Wallpaper/Wallpaper";
import Taskbar from "../Taskbar/Taskbar";
import DesktopIcon from "../DesktopIcon/DesktopIcon";

import { useDesktop } from "../../context/DesktopContext";

import apps from "../../registry/apps";

function Desktop() {
  const { setSelectedIcon } = useDesktop();

  return (
    <div className="desktop" onClick={() => setSelectedIcon(null)}>
      <Wallpaper />

      <div className="desktop-icons">
        {apps.map((app) => (
          <DesktopIcon
            key={app.id}
            id={app.id}
            icon={app.icon}
            label={app.title}
          />
        ))}
      </div>

      <Taskbar />
    </div>
  );
}

export default Desktop;
