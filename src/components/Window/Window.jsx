import { useRef } from "react";
import { useDesktop } from "../../context/DesktopContext";

function Window({ id, title, x, y, z, children }) {
  const { closeWindow, bringToFront, moveWindow, minimizeWindow } =
    useDesktop();

  const dragData = useRef({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
  });

  const startDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    bringToFront(id);

    dragData.current.dragging = true;
    dragData.current.offsetX = e.clientX - x;
    dragData.current.offsetY = e.clientY - y;

    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
  };

  const onDrag = (e) => {
    if (!dragData.current.dragging) return;

    moveWindow(
      id,
      e.clientX - dragData.current.offsetX,
      e.clientY - dragData.current.offsetY,
    );
  };

  const stopDrag = () => {
    dragData.current.dragging = false;

    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", stopDrag);
  };

  return (
    <div
      className="window"
      style={{
        left: `${x}px`,
        top: `${y}px`,
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
            —
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
