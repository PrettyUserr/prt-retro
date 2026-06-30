import { useDesktop } from "../../context/DesktopContext";

function DesktopIcon({ id, icon, label }) {
  const { selectedIcon, setSelectedIcon } = useDesktop();

  return (
    <div
      className={`desktop-icon ${selectedIcon === id ? "selected" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIcon(id);
      }}
    >
      <img src={icon} alt={label} className="desktop-icon-image" />

      <span>{label}</span>
    </div>
  );
}

export default DesktopIcon;
