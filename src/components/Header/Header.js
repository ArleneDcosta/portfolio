import React, { useState, useEffect } from "react";
import "./Header.css";
import ArleneImage from "../../assets/images/Arlene_image.JPG";

function Header() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const textToType = "DATA AND A CODING ENTHUSIAST";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setDisplayedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsTypingComplete(true), 500);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-section">
      <header className="header">
        <div className="text-container">
          <h1>
            👋 Hi, I'm{" "}
            {isTypingComplete ? (
              <span className="highlight">ARLENE ANTONY D'COSTA</span>
            ) : (
              <span className="highlight typing-animation">
                {displayedText}
                <span className="cursor">|</span>
              </span>
            )}
          </h1>
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
    </div>
  );
}

export default Header;
