function Skills() {
  const modules = [
    { icon: "⚛️", name: "React" },
    { icon: "☁️", name: "AWS" },
    { icon: "🐳", name: "Docker" },
    { icon: "💻", name: "JavaScript" },
    { icon: "🌐", name: "HTML5" },
    { icon: "🎨", name: "CSS3" },
    { icon: "🐍", name: "Python" },
    { icon: "🔒", name: "Cloud Security" },
    { icon: "🗄️", name: "MongoDB" },
    { icon: "🌱", name: "Node.js" },
    { icon: "📦", name: "Git" },
    { icon: "🐧", name: "Linux" },
  ];

  return (
    <div className="about-panel">
      <h3>INSTALLED COMPONENTS</h3>

      <div className="control-panel">
        {modules.map((module) => (
          <div className="control-item" key={module.name}>
            <div className="control-icon">{module.icon}</div>

            <span>{module.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
