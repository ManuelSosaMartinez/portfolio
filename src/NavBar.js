import React from "react";
import "./css/NavBar.css";
import FancyButton from "./FancyButton";
import person from "./media/person.png";
import skills from "./media/skills.png";
import proyects from "./media/proyects.png";
import contact from "./media/contact.png";

function NavBar({ refs }) {
  return (
    <nav>
      <h1>Manuel Sosa</h1>
      <h3>FullStack Software Engineer</h3>
      <FancyButton name="Info" img={person} reference={refs.Info} />
      <FancyButton name="Skills" img={skills} reference={refs.Skills} />
      <FancyButton name="Proyects" img={proyects} reference={refs.Proyects} />
      <FancyButton name="Contact" img={contact} reference={refs.Contact} />
    </nav>
  );
}

export default NavBar;
