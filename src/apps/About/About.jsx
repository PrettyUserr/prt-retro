import { useState } from "react";
import "./About.css";

import General from "./tabs/General";
import Skills from "./tabs/Skills";
import Links from "./tabs/Links";
import System from "./tabs/System";

function About() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General" },
    { id: "skills", label: "Skills" },
    { id: "links", label: "Links" },
    { id: "system", label: "System" },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "skills":
        return <Skills />;

      case "links":
        return <Links />;

      case "system":
        return <System />;

      default:
        return <General />;
    }
  };

  return (
    <div className="about">
      <div className="about-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="about-body">{renderTab()}</div>

      <footer className="about-status">
        <span>PetalOS v1.0</span>

        <span> Running...</span>
      </footer>
    </div>
  );
}

export default About;
