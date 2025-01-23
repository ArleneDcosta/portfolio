import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="your-photo.jpg" alt="Your Name" className="photo" />
      <h1>Your Name</h1>
      <h2>Professional Title</h2>
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </header>
  );
}

export default Header;
