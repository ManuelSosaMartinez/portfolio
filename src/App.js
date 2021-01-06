import React, { useRef } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import Info from "./Info.js";

function App() {
  const info = useRef();
  const skills = useRef();
  const proyects = useRef();
  const contact = useRef();
  const refs = {
    Info: info,
    Skills: skills,
    Proyects: proyects,
    Contact: contact,
  };

  return (
    <div>
      <NavBar refs={refs} />
      <ul className="Content">
        <li ref={info}>
          <Info />
        </li>
        <li ref={skills}>Skills</li>
        <li ref={proyects}>Proyects</li>
        <li ref={contact}>Contact</li>
      </ul>
    </div>
  );
}

export default App;
