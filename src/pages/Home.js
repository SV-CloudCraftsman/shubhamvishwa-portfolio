import "./Pages.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container hero-section">
      <div className="hero-content fade-in-down">
        <h1>Azure PaaS Developer <br/>&<br/>Solutions Architect</h1>
        <h3>Technical Lead – Azure & .NET | Scalable APIs | Microservices | Event-Driven Systems</h3>
        <p className="hero-subtitle">
          I design and lead the development of high-scale, cloud-native systems on Microsoft Azure, specializing in API platforms, event-driven architecture, and microservices ecosystems.
        </p>

        <p className="hero-description">
          With 6.5+ years of experience, I have built and optimized enterprise-grade APIs and distributed systems that handle high throughput, ensure fault tolerance, and deliver low-latency performance for mission-critical applications.
        </p>
        {/* <ul className="hero-highlights">
          <li>Azure PaaS: Azure App Service, Azure Functions, Logic Apps, API Management, Service Bus, Azure Blob Storage</li>
          <li>Scalable API Architecture: REST, versioning, gateway patterns, resiliency</li>
          <li>Event-Driven Systems: asynchronous messaging, pub/sub, decoupled services</li>
          <li>Performance Engineering: caching, retry, circuit breaker, observability</li>
        </ul> */}

        <div className="hero-cta">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </div>

      <div className="hero-stats fade-in-up">
        <div className="stat-item">
          <div className="stat-number">6.5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">95%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
