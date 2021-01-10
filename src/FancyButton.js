import React from "react";

function FancyButton({ name, img, reference }) {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button className="FancyButton" onClick={() => scrollToRef(reference)}>
      <h2>{name}</h2>
      <img src={img} alt="" />
    </button>
  );
}
export default FancyButton;
