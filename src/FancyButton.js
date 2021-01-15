import React from "react";

function FancyButton({ name, img, reference }) {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <button className="FancyButton" onClick={() => scrollToRef(reference)}>
      <img src={img} alt="" />
      <h2>{name}</h2>
    </button>
  );
}
export default FancyButton;
