import React from "react";
import "./css/Contact.css";

import LinkedinIcon from "./media/Linkedin.png";
import PhoneIcon from "./media/Phone.png";
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
    data: "www.linkedin.com/in/manu-sm",
    description: "linkedin",
    link: "www.linkedin.com/in/manu-sm",
    img: LinkedinIcon,
  };

  const mediaList = [cellphone, email, linkedin];

  return (
    <div>
      <ul className="MediaList">
        {mediaList.map((media) => (
          <li>
            <a target="_blank" href={media.link}>
              <img src={media.img} />
            </a>
            {media.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
