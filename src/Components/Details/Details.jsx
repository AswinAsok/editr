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

        <div className="creator-container">
          <p className="heading">Creator Staticstics</p>
          <div className="creator">
            <iframe
              src="https://github-readme-stats.vercel.app/api?username=aswinasok&border_color=940EFF&bg_color=940EFF&text_color=ffff&title_color=ffff"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
