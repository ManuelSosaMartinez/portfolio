import React, { useState } from "react";
import { Transition } from "react-transition-group";

function Projects() {
  const [header, setHeader] = useState({
    tittle: "Select a Project",
    description: <h3>"This is my list of proyects"</h3>,
  });
  const secretVoldemort = {
    tittle: "Secret Voldemort",
    description: (
      <h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
      </h3>
    ),
  };
  const graphColoring = {
    tittle: "Graph Coloring",
    description: (
      <h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
      </h3>
    ),
  };
  const portfolio = {
    tittle: "This Portfolio",
    description: (
      <h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
      </h3>
    ),
  };
  const more = {
    tittle: "More on the way!",
    description: (
      <h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat"
      </h3>
    ),
  };
  const ProjectList = [secretVoldemort, graphColoring, portfolio, more];

  const [inProp, setInProp] = useState(true);
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  function changeHeader(project) {
    if (project.tittle !== header.tittle) {
      setInProp(false);
      setTimeout(() => {
        setHeader(project);
        setInProp(true);
      }, duration + 50);
    }
  }

  return (
    <div>
      <div className="Header">
        <Transition in={inProp} out={inProp} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h1>{header.tittle}</h1>
              {header.description}
            </div>
          )}
        </Transition>
      </div>
      <ul className="Projects">
        {ProjectList.map((project) => (
          <div onClick={() => changeHeader(project)}>{project.tittle}</div>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
