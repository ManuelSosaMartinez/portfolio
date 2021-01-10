import React from "react";

function Contact() {
  const cellphone = {
    data: "3512069604",
    description: "phone number",
    link: "",
    img: "",
  };
  const instagram = {
    data: "_manu.sm",
    description: "Instagram",
    link: "",
    img: "",
  };
  const linkedin = {
    data: "in/ManuelSosa",
    description: "linkedin",
    link: "",
    img: "",
  };
  const github = {
    data: "github/ManuelSosa",
    description: "Github",
    link: "",
    img: "",
  };
  const email = {
    data: "mi mail",
    description: "e-mail",
    link: "",
    img: "",
  };
  const mediaList = [cellphone, instagram, linkedin, github, email];
  return (
    <div>
      <h1 className="Tittle">Feel free to find me!</h1>
      <ul className="MediaList">
        {mediaList.map((media) => (
          <li>
            <h3>{media.description}</h3>
            <h3>{media.data}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
