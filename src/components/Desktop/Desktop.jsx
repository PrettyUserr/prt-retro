import Wallpaper from "../Wallpaper/Wallpaper";
import Taskbar from "../Taskbar/Taskbar";

function Desktop() {
  return (
    <div className="desktop">
      <Wallpaper />

      <div className="desktop-content">
        <h1 className="desktop-title">Retro OS</h1>

        <p className="desktop-subtitle">Phase 1 — Desktop Engine</p>
      </div>

      <Taskbar />
    </div>
  );
}

export default Desktop;
