import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Pages.css";

function Projects() {
  return (
    <div className="page-container">
      <div className="page-header fade-in-down">
        <h1>Featured Projects</h1>
        <div className="header-underline"></div>
        <p className="page-intro">
          Explore a selection of my recent projects showcasing Azure cloud solutions, 
          microservices architecture, and full-stack development.
        </p>
      </div>

      <div className="projects-list fade-in-up">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        ) : (
          <p className="no-projects">Projects coming soon...</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
