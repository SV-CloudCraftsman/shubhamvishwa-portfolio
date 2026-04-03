import "./Pages.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(""); // success | error

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  try {
    await emailjs.send(
      "service_9d9j5jm",
      "template_q4dne2k",
      {
        name: name,
        email: email,
        message: message,
      },
      "AU-vAl-LRxm5svLTf"
    );

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);
    setStatus("error");
  } finally {
    setLoading(false);
  }
};

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

              <div className="contact-item">
                <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaYoutube color="#FF0000" /> YouTube
                </h3>
                <a
                  href="https://www.youtube.com/@CloudYantra?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  youtube.com/@CloudYantra
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {status === "success" && (
              <p className="form-success">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="form-error">❌ Failed to send message. Try again.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
