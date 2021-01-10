import React from "react";
import "./css/Contact.css";
import GithubIcon from "./media/GitHub.png";
import LinkedinIcon from "./media/Linkedin.png";
import PhoneIcon from "./media/Phone.png";
import InstagramIcon from "./media/Instagram.png";
import MailIcon from "./media/Mail.png";

function Contact() {
  const cellphone = {
    data: "+54-9-351-2069604",
    description: "",
    link: "https://api.whatsapp.com/send?phone=+54%209%203512%2006-9604",
    img: PhoneIcon,
  };
  const email = {
    data: "ManuelSosaMartinez99@gmail.com",
    description: "e-mail",
    link: "mailto:ManuelSosaMartinez99@gmail.com",
    img: MailIcon,
  };
  const linkedin = {
    data: "",
    description: "linkedin",
    link: "https://www.linkedin.com/in/manuel-sosa-094673166",
    img: LinkedinIcon,
  };
  const github = {
    data: "",
    description: "Github",
    link: "https://github.com/ManuelSosaMartinez",
    img: GithubIcon,
  };
  const instagram = {
    data: "_manu.sm",
    description: "Instagram",
    link: "https://www.instagram.com/_manu.sm/",
    img: InstagramIcon,
  };

  const mediaList = [cellphone, email, linkedin, github, instagram];

  return (
    <div>
      <ul className="MediaList">
        {mediaList.map((media) => (
          <li>
            <a target="_blank" href={media.link}>
              <img src={media.img} />
            </a>
          </li>
        ))}
      </ul>
      <div className="MoreInfo">
        <p>E-Mail: {email.data}</p>
        <p>Cellphone: {cellphone.data}</p>
      </div>
    </div>
  );
}

export default Contact;
