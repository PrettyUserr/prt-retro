import { useDesktop } from "../../context/DesktopContext";

function Taskbar() {
  const { openWindows, restoreWindow } = useDesktop();

  return (
    <footer className="taskbar">
      <div className="taskbar-left">
        <button className="start-button">🌸 Petal</button>

        <div className="taskbar-apps">
          {openWindows.map((window) => (
            <button
              key={window.id}
              className={`taskbar-app ${
                window.minimized ? "minimized" : "active"
              }`}
              onClick={() => restoreWindow(window.id)}
            >
              <img
                src={window.icon}
                alt={window.title}
                width={18}
                height={18}
              />

              <span>{window.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="taskbar-right">
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </footer>
  );
}

export default Taskbar;
