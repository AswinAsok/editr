import React from "react";
import "./Details.css";

const Details = ({ words, characters, special }) => {
  return (
    <div className="details-container">
      <div className="details">
        <p className="heading">Editor Staticstics</p>

        <div className="counters-container">
          <div className="count">
            <div className="circle">
              <p className="counter">{words}</p>
            </div>
            <p className="label">Words</p>
          </div>

          <div className="count">
            <div className="circle">
              <p className="counter">{special}</p>
            </div>
            <p className="label">Special Characters</p>
          </div>

          <div className="count">
            <div className="circle">
              <p className="counter">{characters}</p>
            </div>
            <p className="label">Characters</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;