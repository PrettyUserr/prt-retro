import { useDesktop } from "../../context/DesktopContext";

function DesktopIcon({ id, icon, label, app }) {
  const { selectedIcon, setSelectedIcon, openWindow } = useDesktop();

  return (
    <div
      className={`desktop-icon ${selectedIcon === id ? "selected" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIcon(id);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        openWindow(app);
      }}
    >
      <img src={icon} alt={label} className="desktop-icon-image" />

      <span>{label}</span>
    </div>
  );
}

export default DesktopIcon;
