function DesktopIcon({ icon, label }) {
  return (
    <div className="desktop-icon">
      <img src={icon} alt={label} className="desktop-icon-image" />

      <span>{label}</span>
    </div>
  );
}

export default DesktopIcon;
