import React, { useState, useEffect } from "react";
import "./Header.css";
import ArleneImage from "../../assets/images/Arlene_image.JPG";
import NerdCartoon from "../../assets/images/Cartoonfemale.png";

function Header() {
  const [showCartoon, setShowCartoon] = useState(true);

  useEffect(() => {
    // Hide the cartoon after the animation is done
    const timer = setTimeout(() => setShowCartoon(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="text-container">
        <h1>
          👋 Hi, I'm <span className="highlight">Arlene Antony D'costa</span>
        </h1>
        <h2 className="typing-animation">✨ Welcome to my portfolio! ✨</h2>
        <p className="description">
          🎨 Developer | 💡 Innovator | 🌍 Lifelong Learner <br />
          Let's create something amazing together!
        </p>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/arlenedcosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 LinkedIn
          </a>
          <a
            href="https://github.com/ArleneDcosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </div>
      <img src={ArleneImage} alt="Arlene Antony D'costa" className="photo" />
      {showCartoon && (
        <img
          src={NerdCartoon}
          alt="Nerd Cartoon"
          className="nerd-cartoon"
        />
      )}
    </header>
  );
}

export default Header;
