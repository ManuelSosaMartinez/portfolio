import React from "react";

function Skills() {
  const otherSkills = [
    {
      name: "Proficient Teamwork",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      name: "Problem Solving",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      name: "Design",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      name: "Communication",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      name: "Fluent English",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];
  const techs = [
    {
      name: "Javascript",
      img: "",
    },
    {
      name: "React",
      img: "",
    },
    {
      name: "HTML5",
      img: "",
    },
    {
      name: "CSS3",
      img: "",
    },
    {
      name: "C/C++",
      img: "",
    },
    {
      name: "Java",
      img: "",
    },
    {
      name: "Scala",
      img: "",
    },
    {
      name: "Python",
      img: "",
    },
    {
      name: "MySQL",
      img: "",
    },
    {
      name: "MongoDB",
      img: "",
    },
  ];
  return (
    <div>
      <h1 className="Tittle">About what can I do</h1>
      <h2>Some technologies I work with</h2>
      <ul className="Techs">
        {techs.map((tech) => (
          <li>
            <a>{tech.name}</a>
          </li>
        ))}
      </ul>
      <h2>Capabilities</h2>
      {/* <ul className="Skills">
        {otherSkills.map((skill) => (
          <li>
            <a>{skill.name + ": "}</a>
            <a>{skill.description}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Skills;
