import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-accent">SV</span>
          <span>Shubham Vishwakarma</span>
        </Link>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/skills" className="navbar-link">Skills</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link">Projects</Link>
          </li>
           <li className="navbar-item">
            <Link to="/resume" className="navbar-link">Resume</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link navbar-link-cta">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
