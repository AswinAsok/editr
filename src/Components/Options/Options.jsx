import React from "react";
import "./Options.css";
import headset from "./assets/headset.png";
import trash from "./assets/trash.png";
import star from "./assets/star.png";

const Options = () => {
  return (
    <div className="options-container">
      <div className="options">
        <img src={headset} alt="" className="option" />
        <img src={trash} alt="" className="option" />
        <img src={star} alt="" className="option" />
      </div>
    </div>
  );
};

export default Options;
