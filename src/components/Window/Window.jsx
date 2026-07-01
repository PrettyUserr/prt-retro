import { useDesktop } from "../../context/DesktopContext";

function Window({ id, title, children }) {
  const { closeWindow } = useDesktop();

  return (
    <div className="window">
      <div className="window-titlebar">
        <span>{title}</span>

        <button onClick={() => closeWindow(id)}>×</button>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
