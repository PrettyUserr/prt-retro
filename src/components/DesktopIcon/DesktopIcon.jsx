function DesktopIcon({ icon, label }) {
  return (
    <div className="desktop-icon">
      <div className="desktop-icon-image">{icon}</div>

      <span>{label}</span>
    </div>
  );
}

export default DesktopIcon;
