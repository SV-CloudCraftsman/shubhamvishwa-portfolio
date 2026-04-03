import { motion } from "framer-motion";

export default function SecureShopProject({ project }) {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">

      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">
          SecureShop API – JWT Authentication & Authorization System
        </h1>
        <p className="text-gray-600 mt-2">
          Production-ready ASP.NET Core Web API implementing secure JWT-based authentication, authorization, and API protection with Swagger integration.
        </p>
      </motion.div>

      {/* Project Overview */}
      <div className="card">
        <h2>💼 Project Overview</h2>
        <p>
          SecureShop API is a secure and scalable ASP.NET Core Web API designed to demonstrate real-world implementation of JWT-based authentication and authorization.
        </p>
        <p>
          The system enables secure user login, token generation, and protected API access using industry-standard security practices. It integrates Swagger UI with Bearer token support.
        </p>
        <p>
          This project reflects production-grade architecture and is fully compatible with Azure App Services deployment.
        </p>
      </div>

      {/* Problem Statement */}
      <div className="card">
        <h2>Problem Statement</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Stateless authentication challenges</li>
          <li>Secure API access control</li>
          <li>Token-based identity verification</li>
          <li>Developer-friendly API testing with Swagger</li>
        </ul>
      </div>

      {/* Architecture */}
      <div className="card">
        <h2>Architecture Overview</h2>
        <p>Client → Auth API → JWT Token → Protected APIs → Middleware Validation</p>
        <p className="mt-2">
          The system follows a stateless authentication model where the client receives a JWT token and sends it with each request. Middleware validates the token before granting access.
        </p>
      </div>

      {/* Authentication Flow */}
      <div className="card">
        <h2>Authentication Flow</h2>
        <ol className="list-decimal ml-5 space-y-1">
          <li>POST /api/auth/login</li>
          <li>Server validates credentials</li>
          <li>JWT token generated</li>
          <li>Token returned to client</li>
          <li>Client stores token</li>
          <li>Authorization: Bearer token sent</li>
          <li>Middleware validates token</li>
          <li>Access granted</li>
        </ol>
      </div>

      {/* Features */}
      <div className="card">
        <h2>Key Features</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>JWT Authentication & Authorization</li>
          <li>Stateless API design</li>
          <li>Swagger Bearer integration</li>
          <li>Environment-based configuration</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="card">
        <h2>Tech Stack</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>ASP.NET Core Web API (.NET 8)</li>
          <li>C#</li>
          <li>JWT (Microsoft IdentityModel)</li>
          <li>Swagger</li>
          <li>Azure App Service</li>
        </ul>
      </div>

      {/* Project Structure */}
      <div className="card">
  <h2>📂 Project Structure</h2>
  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`Controllers/
  → AuthController

Services/
  → TokenService

Configuration/
  → JwtSettings

Program.cs
  → Middleware & DI

appsettings.json
  → JWT config`}
  </pre>
</div>

      {/* Key Implementation */}
      <div className="card">
        <h2>Key Implementation Details</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>JWT token generation using symmetric key</li>
          <li>AddAuthentication & AddJwtBearer setup</li>
          <li>[Authorize] attribute for secure endpoints</li>
          <li>Swagger Bearer token integration</li>
          <li>Dependency Injection usage</li>
        </ul>
      </div>

      {/* Use Cases */}
      <div className="card">
        <h2>Real-world Use Cases</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>E-commerce platforms</li>
          <li>SaaS systems</li>
          <li>Microservices architecture</li>
          <li>Mobile backends</li>
        </ul>
      </div>

      {/* Demo */}
      <div className="card">
        <h2>Demo</h2>
        <iframe
          className="w-full h-[400px] rounded-xl border"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Project Demo"
          allowFullScreen
        />
      </div>

      {/* How to Run */}
      <div className="card">
        <h2>How to Run</h2>
        <pre>
git clone https://github.com/your-repo.git
cd SecureShop.API
dotnet restore
dotnet run
        </pre>
        <p>Open https://localhost:&lt;port&gt;/swagger</p>
      </div>

      {/* Learnings */}
      <div className="card">
        <h2>What I Learned</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>JWT authentication flow</li>
          <li>Middleware pipeline</li>
          <li>Secure API design</li>
          <li>Swagger integration</li>
        </ul>
      </div>

      {/* Future */}
      <div className="card">
        <h2>Future Enhancements</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Refresh tokens</li>
          <li>Role-based authorization</li>
          <li>OAuth integration</li>
          <li>Logging & monitoring</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="card text-center">
        <h2>Let's Build Secure Systems</h2>
        <p>Looking to build secure, scalable APIs? Let’s connect.</p>
      </div>

      {/* GitHub */}
      <div className="text-center">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <button className="btn">View GitHub Repository</button>
        </a>
      </div>

    </div>
  );
}