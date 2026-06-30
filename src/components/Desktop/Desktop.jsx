import Wallpaper from "../Wallpaper/Wallpaper";
import Taskbar from "../Taskbar/Taskbar";
import DesktopIcon from "../DesktopIcon/DesktopIcon";

import apps from "../../registry/apps";

function Desktop() {
  return (
    <div className="desktop">
      <Wallpaper />

      <div className="desktop-icons">
        {apps.map((app) => (
          <DesktopIcon key={app.id} icon={app.icon} label={app.title} />
        ))}
      </div>

      <Taskbar />
    </div>
  );
}

export default Desktop;
