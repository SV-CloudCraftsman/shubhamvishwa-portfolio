import "./Pages.css";

function Skills() {
  const skills = {
    Backend: ["C#", ".NET Core", "ASP.NET Web API", "Entity Framework", "LINQ"],

    "Azure & Cloud": [
      "Azure App Service, Azure Functions",
      "Azure API Management (APIM)",
      "Azure Service Bus, Event Grid",
      "Azure SQL, Cosmos DB",
      "Azure Key Vault, Managed Identity",
      "Azure Application Insights",
      "Azure Redis Cache",
      "Azure Storage (Blob)",
      "Azure Logic Apps"
    ],

    DevOps: ["Azure DevOps", "CI/CD", "GitHub Actions"],

    Frontend: ["React", "JavaScript", "HTML5", "CSS3"],

    Databases: ["SQL Server", "Cosmos DB", "Azure SQL"],

    Architecture: ["RESTFul APIs", "Event-Driven", "Microservices", "Serverless", "Scalable Systems"],
  };

  return (
    <div className="page-container">
      <div className="page-header fade-in-down">
        <h1>Technical Skills</h1>
        <div className="header-underline"></div>
      </div>

      <div className="skills-grid fade-in-up">
        {Object.keys(skills).map((category, index) => (
          <div
            key={category}
            className="skill-category"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-list">
              {skills[category].map((skill) => (
                <div key={skill} className="skill-item">
                  <span className="skill-dot"></span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
