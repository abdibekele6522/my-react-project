import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import profilePic from "./profile.jpg";

// Social Icons
import telegramIcon from "./assets/telegram.png";
import tiktokIcon from "./assets/tiktok.png";
import facebookIcon from "./assets/facebook.png";
import youtubeIcon from "./assets/youtube.png";

function HomePage() {

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src={profilePic} alt="Abdi Bekele Profile" className="profile-pic" />
          <div className="hero-text">
            <h1>Hello, I'm <span>Abdi Bekele</span></h1>
            <p>Full Stack Developer → Future AI Engineer</p>
            {/* Updated Hire Me Button */}
            <button className="hero-button" onClick={scrollToContact}>Hire Me</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a <strong>Full Stack Developer</strong> focused on delivering modern, scalable, 
              and performance-oriented applications. With expertise in both frontend and backend, 
              I build complete digital solutions from concept to deployment.
            </p>
            <p>
              I specialize in <strong>React</strong> for dynamic user interfaces, 
              <strong> Node.js</strong> for robust backend systems, and <strong>C# / C++</strong> 
              for performance-driven applications. My approach combines clean architecture, 
              efficient code, and user-centered design.
            </p>
            <p>
              My ambition is to evolve into an <strong>AI Engineer</strong>, integrating intelligent 
              systems with web platforms to create innovative and impactful products.
            </p>
            <p>
              I believe in continuous growth, disciplined learning, and building technology 
              that solves real-world problems.
            </p>
          </div>

          <div className="about-image">
            <img src={profilePic} alt="Abdi Bekele" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-cards">
          {[
            {
              title: "AI Chat App",
              description: "Smart AI assistant interface with real-time responses.",
              image: "/projects/ai-chat.png",
              link: "https://github.com/abdibekele6522/our-star/blob/eb7fc80c20b10fe4a4caff9bb93ec4a0fe210924/hall%20reservation.html"
            },
            {
              title: "E-commerce Platform",
              description: "Modern, secure shopping platform with responsive design.",
              image: "/assets/facebook.png",
              link: "https://github.com/abdibekele6522/Abdibekele6522.git"
            },
            {
              title: "Portfolio Website",
              description: "Responsive personal portfolio showcasing my skills.",
              image: "/projects/portfolio.png",
              link: "https://github.com/Ibnutesfaye/registration.git"
            }
          ].map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FOOTER */}
      <section className="contact-footer" id="contact">
        <div className="contact-footer-container">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>My Contact</h2>
            <p><strong>Email:</strong> sinewabdi@gmail.com</p>
            <p><strong>Phone:</strong> +251-960-328819</p>

            <h3>Social Media</h3>
            <div className="social-icons">
              <a href="https://t.me/@abdibekel" target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="Telegram" className="social-icon" />
              </a>
              <a href="https://www.tiktok.com/@gonup_1" target="_blank" rel="noreferrer">
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              </a>
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" />
              </a>
            </div>

            <div className="cv-buttons">
              <a href="/cv.pdf" target="_blank" rel="noreferrer">
                <button>View CV</button>
              </a>
              <a href="/cv.pdf" download>
                <button>Download CV</button>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form">
            <h2>Send Your Project Idea</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const fullName = form.fullName.value;
                const company = form.company.value;
                const email = form.email.value;
                const phone = form.phone.value;
                const idea = form.idea.value;

                const receiver = "sinewabdi@gmail.com";
                const subject = `New Project Idea from ${fullName}`;
                const body = `
Full Name: ${fullName}
Company: ${company}
Email: ${email}
Phone: ${phone}

Project Idea:
${idea}
                `;

                const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(receiver)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(gmailURL, "_blank");
              }}
            >
              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="text" name="company" placeholder="Company Name (Optional)" />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="phone" placeholder="Phone Number" required />
              <textarea name="idea" placeholder="Describe your project..." rows="5" required />
              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <section className="portfolio-end">
        <h2>Thanks for Visiting 🚀</h2>
        <p>Building the future with code & AI.</p>
      </section>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section function for navbar links
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on mobile
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Abdi<span>Dev</span></h2>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home" onClick={() => scrollToSection("home")}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection("about")}>About</a></li>
          <li><a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a></li>
          <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a></li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;