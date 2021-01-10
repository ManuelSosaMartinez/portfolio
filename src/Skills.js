import React, { useState, useRef } from "react";
import { Transition } from "react-transition-group";
import { useMediaQuery } from "react-responsive";
import "./css/Skills.css";
import ReactIcon from "./media/React.png";
import HTML5Icon from "./media/HTML5.png";
import CSS3Icon from "./media/CSS3.png";
import JavaIcon from "./media/Java.png";
import PythonIcon from "./media/Python.png";
import CIcon from "./media/C.png";
import ScalaIcon from "./media/Scala.png";
import MongoDBIcon from "./media/MongoDB.png";
import MySQLIcon from "./media/MySQL.png";
import GitIcon from "./media/Git.png";

function Skills() {
  const strengths = [
    {
      name: "Proficient Teamwork",
      description:
        "I love teamworking; I can learn from it while it increases overall productivity.",
    },
    {
      name: "Communication",
      description:
        "Listen carefuly, deliver concise information; good communication is a perk I posses.",
    },
    {
      name: "Fast Learning",
      description: "I'm always willing to learn; and I'm very quick at it.",
    },
    {
      name: "Problem Solving",
      description:
        "I am prone to solving hard problems. I'll always take a challenge.",
    },
    {
      name: "Design",
      description:
        "Be it layouts or be it software hierarchies, I'm usually end up finding perfect designs.",
    },
  ];
  const techs = [
    {
      name: "React",
      img: ReactIcon,
    },
    {
      name: "HTML5",
      img: HTML5Icon,
    },
    {
      name: "CSS3",
      img: CSS3Icon,
    },
    {
      name: "Java",
      img: JavaIcon,
    },
    {
      name: "Scala",
      img: ScalaIcon,
    },
    {
      name: "Python",
      img: PythonIcon,
    },
    {
      name: "C/C++",
      img: CIcon,
    },
    {
      name: "MySQL",
      img: MySQLIcon,
    },
    {
      name: "MongoDB",
      img: MongoDBIcon,
    },
    { name: "Git", img: GitIcon },
  ];

  const knowledges = [
    {
      name: "Object Oriented Programming",
      description: "SOLID is my design standard for everything I do",
    },
    {
      name: "Algorithms and Data Structures",
      description:
        "Binary trees, hash tables, dynamic programming and more; all included",
    },
    {
      name: "Testing",
      description:
        "I excel at software testing and debugging, white-box and black-box",
    },
    {
      name: "RESTful Web APIs",
      description:
        "Both server side and client side, I fully make use of RESTful APIs potential",
    },
    {
      name: "Scrum",
      description:
        "The most popular agile methodology, and my preferred way to work",
    },
    {
      name: "Software Architecture",
      description:
        "I'm able to understand and design a wide variety of software structures",
    },
    {
      name: "Functional/Declarative Programming",
      description:
        "A different programming approach; It's something I consider useful to know",
    },
  ];

  const techList = (
    <div className="techContainer">
      <h1>The technologies I work with</h1>
      <ul className="Technologies">
        {techs.map((tech) => (
          <li>
            <h3>{tech.name}</h3>
            <img src={tech.img} />
          </li>
        ))}
      </ul>
      <h1>And many more!</h1>
      <a>
        I'm always ready and willing to learn and work with new technologies
      </a>
    </div>
  );

  const strList = (
    <div className="strContainer">
      <h1>My strengths in a workspace</h1>
      <ul className="Strengths">
        {strengths.map((skill) => (
          <li>
            <h2>{skill.name}</h2>
            <a>{skill.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const knowList = (
    <div className="knowContainer">
      <h1>What I learnt over my career</h1>
      <ul className="Knowledges">
        {knowledges.map((knowledge) => (
          <li>
            <h2>{knowledge.name}</h2>
            <a>{knowledge.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );

  const allLists = [
    { listName: "Technologies", component: techList },
    { listName: "Knowledges", component: knowList },
    { listName: "Strengths", component: strList },
  ];

  const [header, setHeader] = useState(allLists[0]);
  const [inProp, setInProp] = useState(true);
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, margin ${
      duration * 1.5
    }ms ease-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, marginLeft: 0 },
    entered: { opacity: 1, marginLeft: 0 },
    exiting: { opacity: 0, marginLeft: 0 },
    exited: { opacity: 0, marginLeft: 0 },
  };

  function changeHeader(list) {
    if (list.listName !== header.listName) {
      setInProp(false);
      setTimeout(() => {
        setHeader(list);
        setInProp(true);
      }, duration + 50);
    }
  }

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <ul
        className="selectors"
        style={
          isMobile
            ? { "flex-direction": "column" }
            : { "flex-direction": "row" }
        }
      >
        {allLists.map((list) => (
          <button
            className={
              header.listName !== list.listName ? "selector" : "selected"
            }
            onClick={() => changeHeader(list)}
          >
            {list.listName}
          </button>
        ))}
      </ul>
      <Transition in={inProp} out={inProp} timeout={duration}>
        {(state) => (
          <div
            className="SkillContainer"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {header.component}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Skills;
