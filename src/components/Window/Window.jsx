function Window({ title, children }) {
  return (
    <div className="window">
      <div className="window-titlebar">
        <span>{title}</span>

        <button>✕</button>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
