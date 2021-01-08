import React, { useRef } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Info from "./Info.js";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Perlin4 from "./media/Perlin4.jpg";
import me from "./media/me.jpeg";

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

  const image = <img src="Perlin4" style={{ filter: "grayscale(100%)" }} />;
  return (
    <div
      style={{
        backgroundImage: image,
        "background-size": "100% 100%",
      }}
    >
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
