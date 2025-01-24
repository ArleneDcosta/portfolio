import React from "react";
import Header from "./components/Header/Header";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationButtons />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
