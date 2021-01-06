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
    <div>
      <NavBar refs={refs} />
      <ul className="Content">
        <li ref={info}>
          <Info />
        </li>
        <li ref={skills}>
          <Skills />
        </li>
        <li ref={projects}>
          <Projects />
        </li>
        <li ref={contact}>
          <Contact />
        </li>
      </ul>
    </div>
  );
}

export default App;
