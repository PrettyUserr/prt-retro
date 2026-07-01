import { useDesktop } from "../../context/DesktopContext";

function Window({ id, title, x, y, z, children }) {
  const { closeWindow, focusWindow } = useDesktop();

  return (
    <div
      className="window"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        zIndex: z,
      }}
      onMouseDown={() => focusWindow(id)}
    >
      <div className="window-titlebar">
        <span>{title}</span>

        <button onClick={() => closeWindow(id)}>×</button>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
