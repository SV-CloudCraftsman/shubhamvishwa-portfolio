import "./Pages.css";

function Home() {
  return (
    <div className="page-container hero-section">
      <div className="hero-content fade-in-down">
        <h1>Azure Full Stack Developer</h1>
        <p className="hero-subtitle">
          Architect scalable cloud solutions with ASP.NET Core, Microservices, and Microsoft Azure
        </p>

        <p className="hero-description">
          6+ years building enterprise APIs, distributed systems, and event-driven architectures that power mission-critical applications.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>

      <div className="hero-stats fade-in-up">
        <div className="stat-item">
          <div className="stat-number">6+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">20+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
