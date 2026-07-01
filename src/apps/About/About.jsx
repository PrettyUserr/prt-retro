import "./About.css";

function About() {
  return (
    <div className="about-app">
      <div className="profile-header">
        <img src="/avatar.png" alt="Ibukun" className="profile-avatar" />

        <div className="profile-info">
          <h1>SYSTEM PROFILE</h1>

          <div className="profile-grid">
            <span>User</span>
            <span>PrtUsr</span>

            <span>Name</span>
            <span>Ibukun Olaniyan</span>

            <span>Role</span>
            <span>Cloud Security Engineer</span>

            <span>Status</span>
            <span className="online">● Online</span>

            <span>Mission</span>
            <span>Build. Learn. Ship.</span>

            <span>Location</span>
            <span>/home/prtusr</span>
          </div>
        </div>
      </div>

      <div className="divider" />

      <h2>ABOUT</h2>

      <p>
        Hi! I'm Ibukun, also known online as <strong>PrtUsr</strong>. I'm a
        Cloud Security Engineer in training with a background in frontend
        development, technical writing, project management, and research. I
        enjoy building practical software, exploring cloud technologies,
        documenting what I learn, and creating experiences that feel both useful
        and fun.
      </p>

      <div className="divider" />

      <h2>INSTALLED MODULES</h2>

      <div className="skills">
        <span>Linux</span>
        <span>React</span>
        <span>Python</span>
        <span>Git</span>
        <span>Cloud</span>
        <span>Research</span>
        <span>Writing</span>
        <span>AI</span>
      </div>

      <div className="divider" />

      <div className="links">
        <a
          href="https://github.com/PrettyUserr"
          target="_blank"
          rel="noreferrer"
        >
          GitHub.exe
        </a>

        <a
          href="https://www.linkedin.com/in/ibukun-olaniyan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn.exe
        </a>

        <a href="https://x.com/prtusr?s=20" target="_blank" rel="noreferrer">
          X.exe
        </a>
      </div>
    </div>
  );
}

export default About;
