import "./Pages.css";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-header fade-in-down">
        <h1>Get In Touch</h1>
        <div className="header-underline"></div>
      </div>

      <div className="contact-content fade-in-up">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              I'm always interested in hearing about new projects and
              opportunities. Whether you need a cloud architect, full-stack
              developer, or DevOps expert, feel free to reach out!
            </p>

            <div className="contact-channels">
              <div className="contact-item">
                <h3>📧 Email</h3>
                <a href="mailto:shubh21031998@gmail.com">
                  shubh21031998@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <h3>💼 LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/shubhamvishwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/shubhamvishwa/
                </a>
              </div>

              <div className="contact-item">
                <h3>🐙 GitHub</h3>
                <a
                  href="https://github.com/SV-CloudCraftsman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/SV-CloudCraftsman
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Me a Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
