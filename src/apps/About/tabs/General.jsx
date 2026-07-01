function General() {
  return (
    <>
      <section className="profile-card">
        <div className="avatar-frame">
          <img
            src="/avatar.png"
            alt="Ibukun Olaniyan"
            className="profile-avatar"
          />
        </div>

        <div className="profile-info">
          <h2>SYSTEM PROFILE</h2>

          <div className="profile-grid">
            <span>User:</span>
            <span>PrtUsr</span>

            <span>Name:</span>
            <span>Ibukun Olaniyan</span>

            <span>Role:</span>
            <span>Cloud Security Engineer</span>

            <span>Status:</span>
            <span className="online">● Online</span>

            <span>Mission:</span>
            <span>Build • Learn • Ship</span>

            <span>Location:</span>
            <span>/home/prtusr</span>
          </div>
        </div>
      </section>

      <section className="about-panel">
        <h3>ABOUT</h3>

        <p>
          Hi! I'm <strong>Ibukun</strong>, also known online as{" "}
          <strong>PrtUsr</strong>.
        </p>

        <p>
          I build nostalgic interfaces, cloud projects, and interactive web
          experiences inspired by classic operating systems.
        </p>

        <p>
          PetalOS is my love letter to retro computing, rebuilt using React.
        </p>
      </section>
    </>
  );
}

export default General;
