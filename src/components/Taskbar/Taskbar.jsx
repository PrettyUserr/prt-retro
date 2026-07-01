import { useEffect, useMemo, useState } from "react";
import { useDesktop } from "../../context/DesktopContext";

function Taskbar() {
  const { openWindows, restoreWindow } = useDesktop();

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  // Remove accidental duplicates
  const taskbarWindows = useMemo(() => {
    const seen = new Set();

    return openWindows.filter((window) => {
      if (seen.has(window.id)) return false;

      seen.add(window.id);
      return true;
    });
  }, [openWindows]);

  return (
    <footer className="taskbar">
      <div className="taskbar-left">
        <button className="start-button">🌸 Petal</button>

        <div className="taskbar-apps">
          {taskbarWindows.map((window) => (
            <button
              key={window.id}
              className={`taskbar-app ${window.minimized ? "minimized" : ""}`}
              onClick={() => restoreWindow(window.id)}
            >
              <img
                src={window.icon}
                alt={window.title}
                className="taskbar-app-icon"
              />

              <span>{window.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="taskbar-clock">{time}</div>
    </footer>
  );
}

export default Taskbar;
