import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

// Import all project components
import SecureShopProject from "./SecureShopProject";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  // Component mapping
  const componentMap = {
    SecureShopProject: SecureShopProject
  };

  const Component = componentMap[project.component];

  if (!Component) return <p>No component found</p>;

  return <Component project={project} />;
}

export default ProjectDetails;