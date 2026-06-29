import { useEffect, useState } from "react";

function Taskbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="taskbar">
      <button className="start-button">Start</button>

      <div className="taskbar-spacer"></div>

      <div className="clock">{time}</div>
    </footer>
  );
}

export default Taskbar;
