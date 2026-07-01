import { useRef } from "react";
import { useDesktop } from "../../context/DesktopContext";

function Window({ id, title, x, y, z, children }) {
  const { closeWindow, bringToFront, moveWindow, minimizeWindow } =
    useDesktop();

  const drag = useRef({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
  });

  const handleMouseMove = (e) => {
    if (!drag.current.dragging) return;

    moveWindow(
      id,
      e.clientX - drag.current.offsetX,
      e.clientY - drag.current.offsetY,
    );
  };

  const handleMouseUp = () => {
    drag.current.dragging = false;

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const startDrag = (e) => {
    e.preventDefault();

    bringToFront(id);

    drag.current.dragging = true;
    drag.current.offsetX = e.clientX - x;
    drag.current.offsetY = e.clientY - y;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="window"
      style={{
        left: x,
        top: y,
        zIndex: z,
      }}
      onMouseDown={() => bringToFront(id)}
    >
      <div className="window-titlebar" onMouseDown={startDrag}>
        <span>{title}</span>

        <div className="window-buttons">
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            title="Minimize"
          >
            _
          </button>

          <button disabled title="Maximize (coming soon)">
            □
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
