import React, { useRef } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Info from "./Info.js";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

function App() {
  const info = useRef();
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();
  const refs = {
    Info: info,
    Skills: skills,
    Projects: projects,
    Contact: contact,
  };

  return (
    <div className="App">
      <NavBar refs={refs} />
      <ul className="Content">
        <li ref={info}>
          <Info />
        </li>
        <li ref={skills}>
          <h1 className="Tittle">What can I do</h1>
          <Skills />
        </li>
        <li ref={projects}>
          <h1 className="Tittle">What I'm working on</h1>
          <Projects />
        </li>
        <li ref={contact}>
          <h1 className="Tittle">Feel free to find me!</h1>
          <Contact />
        </li>
      </ul>
    </div>
  );
}

export default App;
