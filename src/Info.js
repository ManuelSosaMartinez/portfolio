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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat"
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
