import Wallpaper from "../Wallpaper/Wallpaper";
import Taskbar from "../Taskbar/Taskbar";
import DesktopIcon from "../DesktopIcon/DesktopIcon";

function Desktop() {
  return (
    <div className="desktop">
      <Wallpaper />

      <div className="desktop-icons">
        <DesktopIcon icon="📁" label="About" />

        <DesktopIcon icon="💻" label="Projects" />

        <DesktopIcon icon="📄" label="Resume" />

        <DesktopIcon icon="📬" label="Contact" />
      </div>

      <Taskbar />
    </div>
  );
}

export default Desktop;
