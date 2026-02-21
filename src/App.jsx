import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import profilePic from "./profile.jpg";
import My_Contacts from "./My_Contacts";

function HomePage() {
  return (
    <>
      {/* HERO */}
<section id="home" className="hero">
  <div className="hero-content">
    <img src={profilePic} alt="Profile" className="profile-pic" />
    <div className="hero-text">
      <h1>Hello, I'm <span>Abdi Bekele</span></h1>
      <p>Full Stack Developer → Future AI Engineer</p>
      <Link to="/contact">
        <button className="hero-button">Hire Me</button>
      </Link>
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
    </>
  );
}

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Abdi<span>Dev</span></h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<My_Contacts />} />
      </Routes>
    </>
  );
}

export default App;