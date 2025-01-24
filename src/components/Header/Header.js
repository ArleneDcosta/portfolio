import React from "react";
import "./Header.css";
import ArleneImage from "../../assets/images/Arlene_image.JPG";

function Header() {
  return (
    <header className="header">
      <div className="text-container">
        <h1>
          👋 Hi, I'm <span className="robotic-name">
            ARLENE ANTONY D'COSTA
            <span className="glitch-line"></span>
          </span>
        </h1>
        <h2>
          <span className="typing-animation-once">✨ Welcome to my portfolio! ✨</span>
        </h2>
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
    </header>
  );
}

export default Header;
