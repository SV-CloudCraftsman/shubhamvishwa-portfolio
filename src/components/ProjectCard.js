import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card fade-in-up">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <Link to={`/projects/${project.slug}`} className="project-link">
        <span>View More Details</span>
        <span className="link-icon">→</span>
      </Link>
    </div>
  );
}

export default ProjectCard;
