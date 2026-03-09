import "./ProjectCard.css";

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

      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
        <span>View on GitHub</span>
        <span className="link-icon">→</span>
      </a>
    </div>
  );
}

export default ProjectCard;
