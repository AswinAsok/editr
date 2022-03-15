import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-container">
      <div className="details">
        <p className="heading">Editor Staticstics</p>
        <div className="word-count">No.of Words: 100</div>
        <div className="letter-count">No. of Letters: 159</div>
      </div>
    </div>
  );
};

export default Details;
