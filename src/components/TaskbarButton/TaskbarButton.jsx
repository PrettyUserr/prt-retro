import { useDesktop } from "../../context/DesktopContext";

function TaskbarButton({ window }) {
  const { bringToFront } = useDesktop();

  return (
    <button className="taskbar-app" onClick={() => bringToFront(window.id)}>
      <img src={window.icon} alt={window.title} width="18" />

      <span>{window.title}</span>
    </button>
  );
}

export default TaskbarButton;
