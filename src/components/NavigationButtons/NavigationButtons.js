import React from "react";
import "./NavigationButtons.css";

function NavigationButtons() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <div class="navigation">
    <section className="navigation-buttons">
      <button onClick={() => scrollToSection("about")}>About</button>
      <button onClick={() => scrollToSection("experience")}>Experience</button>
      <button onClick={() => scrollToSection("education")}>Education</button>
      <button onClick={() => scrollToSection("projects")}>Projects</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("contact")}>Contact Me</button>
    </section>
    </div>
  );
}

export default NavigationButtons;
