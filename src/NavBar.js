import React, { useState } from "react";
import "./css/NavBar.css";
import FancyButton from "./FancyButton";
import person from "./media/person.png";
import skills from "./media/skills.png";
import projects from "./media/projects.png";
import contact from "./media/contact.png";
import { useMediaQuery } from "react-responsive";
import { Transition } from "react-transition-group";
import leftArrow from "./media/leftArrow.png";
import rightArrow from "./media/rightArrow.png";

function NavBar({ refs }) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [inProp, setInProp] = useState(true);
  const duration = 300;
  const defaultStyle = {
    transition: `margin ${duration}ms ease-in-out`,
  };

  const transitionStyles = {
    entering: { "margin-left": 0 },
    entered: { "margin-left": 0 },
    exiting: { "margin-left": "-40%" },
    exited: { "margin-left": "-40%" },
  };

  return (
    <div>
      <Transition in={inProp || !isMobile} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {inProp || !isMobile ? (
              <nav>
                <h1>Manuel Sosa</h1>
                <h3>FullStack Software Developer</h3>
                <FancyButton name="Info" img={person} reference={refs.Info} />
                <FancyButton
                  name="Skills"
                  img={skills}
                  reference={refs.Skills}
                />
                <FancyButton
                  name="Projects"
                  img={projects}
                  reference={refs.Projects}
                />
                <FancyButton
                  name="Contact"
                  img={contact}
                  reference={refs.Contact}
                />
              </nav>
            ) : (
              <nav />
            )}
            {isMobile ? (
              <img
                src={inProp ? leftArrow : rightArrow}
                className="CloseButton"
                onClick={() => setInProp(!inProp)}
              />
            ) : (
              ""
            )}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default NavBar;
