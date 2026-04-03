import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shubham Vishwakarma</h3>
            <p>Azure Developer & Solutions Architect</p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="https://github.com/SV-CloudCraftsman" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/shubhamvishwa/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:shubh21031998@gmail.com">Email</a>
              <a href="https://www.youtube.com/@CloudYantra?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Tech Stack</h4>
            <p>Azure • .NET Core </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Shubham Vishwakarma. All rights reserved.</p>
          <p className="footer-tagline">Architecting Cloud Solutions with Azure</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
