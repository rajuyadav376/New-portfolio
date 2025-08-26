import { useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import TimelineSection from "./components/Timeline";
import ProjectsSection from "./components/Projects";
import CertificationsSection from "./components/Certifications";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  // Toggle Light/Dark Mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Smooth Scroll to Sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main
      className={`relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {/* Navbar/Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />

      {/* Page Sections */}
      <div className="relative z-10">
        {/* Hero / Home */}
        <section id="home">
          <HeroSection theme={theme} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
        </section>

        {/* About */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Skills */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Timeline */}
        <section id="timeline">
          <TimelineSection />
        </section>

        {/* Projects */}
        <section id="projects">
          <ProjectsSection />
        </section>

        {/* Certifications */}
        <section id="certifications">
          <CertificationsSection />
        </section>

        {/* Contact */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
