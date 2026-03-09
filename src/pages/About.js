import "./Pages.css";

function About() {
  return (
    <div className="page-container">
      <div className="page-header fade-in-down">
        <h1>About Me</h1>
        <div className="header-underline"></div>
      </div>

      <div className="page-content fade-in-up">
        <div className="about-grid">
          <div className="about-text">
            <h2>Software Engineer & Azure Architect</h2>
            <p>
              I'm a passionate software engineer with 6+ years of experience designing and implementing robust, scalable cloud solutions on Microsoft Azure. My expertise spans the full application lifecycle—from microservices architecture and API design to DevOps practices.
            </p>

            <p>
              I specialize in building enterprise-grade systems that solve complex business problems. Whether it's designing event-driven architectures, implementing containerized deployments, or optimizing cloud infrastructure, I'm committed to delivering solutions that drive real business value.
            </p>

            <h3>Core Expertise</h3>
            <ul className="expertise-list">
              <li>Cloud Architecture & Migration</li>
              <li>Microservices & Distributed Systems</li>
              <li>Azure Ecosystem (Functions, Service Bus, Cosmos DB)</li>
              <li>DevOps & Container Orchestration</li>
              <li>Full Stack Development</li>
            </ul>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Architecture</h3>
              <p>Designing scalable, resilient cloud systems</p>
            </div>
            <div className="highlight-card">
              <h3>Development</h3>
              <p>Building performant applications with modern tech</p>
            </div>
            <div className="highlight-card">
              <h3>DevOps</h3>
              <p>Automating deployments and infrastructure</p>
            </div>
            <div className="highlight-card">
              <h3>Mentoring</h3>
              <p>Guiding teams through technical excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
