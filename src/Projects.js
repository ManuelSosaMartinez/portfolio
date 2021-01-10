import React, { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import "./css/Projects.css";
import { useMediaQuery } from "react-responsive";
import projectIcon from "./media/projects.png";
import svIcon from "./media/svIcon.png";
import graph from "./media/graph.png";
import portfolioIcon from "./media/portfolio.png";
import plusIcon from "./media/plus.png";
import svImage from "./media/svImage.png";
import graphImage from "./media/graphImage.png";
import moreImage from "./media/moreImg.png";

function Projects() {
  const [header, setHeader] = useState({
    tittle: "Select a Project",
    description: <h3>"This is my list of projects"</h3>,
    link: "",
    linkText: "",
    icon: projectIcon,
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
    img: svImage,
    icon: svIcon,
    link: "asdd",
    linkText: "dasdas",
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
    img: graphImage,
    icon: graph,
    link: "asdd",
    linkText: "dasdas",
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
    img: "",
    icon: portfolioIcon,
    link: "asdd",
    linkText: "dasdas",
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
    img: moreImage,
    icon: plusIcon,
    link: "asdd",
    linkText: "dasdas",
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

  const headerRef = useRef();
  function changeHeader(project) {
    if (project.tittle !== header.tittle) {
      setInProp(false);
      setTimeout(() => {
        setHeader(project);
        setInProp(true);
      }, duration + 50);
    }
    headerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <div ref={headerRef} className="Header">
        <Transition in={inProp} out={inProp} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h1>{header.tittle}</h1>
              <img
                className={isMobile ? "Icon" : "Image"}
                src={isMobile ? header.icon : header.img}
              />
              {header.description}
              {header.linkText !== "" ? (
                <a href={header.link}>{header.linkText}</a>
              ) : (
                ""
              )}
            </div>
          )}
        </Transition>
      </div>
      <ul className="Projects">
        {ProjectList.map((project) => (
          <div onClick={() => changeHeader(project)}>
            {project.tittle}
            <img src={project.icon} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
