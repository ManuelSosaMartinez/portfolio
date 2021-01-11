import React from "react";
import { useMediaQuery } from "react-responsive";
import me from "./media/me2.png";
import "./css/Info.css";

function Info() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  function download() {
    console.log("hola");
  }

  const downloadCV = (
    <button className="btn" onClick={() => download()}>
      Get my CV
    </button>
  );
  return (
    <div className="Info">
      <div>
        <h4>Hello there! I'm </h4>
        <h1>Manuel Sosa</h1>
        <h3>
          A 21 years old non-binary software engineer and student, currently in
          the 4th year of my career in Computer Science. Be it academically or
          work-related, my goal is to keep on learning. Let's talk!
        </h3>
        {isMobile ? downloadCV : ""}
      </div>
      <div>
        {isMobile ? (
          ""
        ) : (
          <div>
            <img src={me} />
            {downloadCV}
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
