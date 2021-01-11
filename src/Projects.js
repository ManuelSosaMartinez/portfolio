import React, { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import "./css/Projects.css";
import { useMediaQuery } from "react-responsive";

import svIcon from "./media/svIcon.png";
import graph from "./media/graph.png";
import portfolioIcon from "./media/portfolio.png";
import plusIcon from "./media/plus.png";
import svImage from "./media/svImage.png";
import graphImage from "./media/graphImage.png";
import moreImage from "./media/moreImg.png";

import portfolioImage from "./media/portfolioImage.png";

function Projects() {
  const [header, setHeader] = useState({
    tittle: "Select a Project",
    description: (
      <h3>"This is the list of projects I'm currently working on!"</h3>
    ),
    link: "",
    linkText: "",
    img: "",
  });
  const secretVoldemort = {
    tittle: "Secret Voldemort",
    description: (
      <h3>
        This project is a web version of "Secret Voldemort", a popular board
        game, soon to be deployed!. I'm working mainly on the frontend with
        React and Redux. But it's not only the game! You can also create a user
        and check your stats and match history.
      </h3>
    ),
    img: svImage,
    icon: svIcon,
    link: "https://github.com/csralvall/Baldomeros-Secret-Voldemort",
    linkText: "Check the code!",
  };
  const graphColoring = {
    tittle: "Graph Coloring",
    description: (
      <h3>
        The famous graph coloring problem: color as many vertex with the less
        amount of colors possible. This project was born long ago; we made a
        program in C to do huge calculations very fast, and recently I'm working
        with React to properly display the results!.
      </h3>
    ),
    img: graphImage,
    icon: graph,
    link: "https://github.com/ManuelSosaMartinez/Graph-Coloring",
    linkText: "Check the code!",
  };
  const portfolio = {
    tittle: "This Portfolio",
    description: (
      <h3>
        My portfolio! I made it myself with React and I plan to keep shaping it
        up over time. I'm also working on a friends portfolio, so soon you'll
        probably see it up here!
      </h3>
    ),
    img: portfolioImage,
    icon: portfolioIcon,
    link: "https://github.com/ManuelSosaMartinez/portfolio",
    linkText: "Check the code!",
  };
  const more = {
    tittle: "More on the way!",
    description: (
      <h3>
        I'm currently working on a fair lot of projects; just nothing to show
        yet! As soon as I get more code written and a stable version, I'll be
        updating this section and publishing the repos.
      </h3>
    ),
    img: moreImage,
    icon: plusIcon,
    link: "https://github.com/ManuelSosaMartinez",
    linkText: "My GitHub!",
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
              {header.img != "" ? (
                <img
                  className={isMobile ? "Icon" : "Image"}
                  src={isMobile ? header.icon : header.img}
                />
              ) : (
                ""
              )}
              {header.description}
              {header.linkText !== "" ? (
                <a target="_blank" href={header.link}>
                  {header.linkText}
                </a>
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
