import React from "react";
import "./Options.css";
import headset from "./assets/headset.png";
import headset_on from "./assets/headset_on.png";
import trash from "./assets/trash.png";
import star from "./assets/star.png";

import SpeechRecognition from "react-speech-recognition";

const Options = ({ setText, listening }) => {
  return (
    <div className="options-container">
      <div className="options">
        {(() => {
          if (!listening) {
            return (
              <img
                src={headset}
                alt=""
                className="option"
                onClick={SpeechRecognition.startListening}
              />
            );
          } else {
            return (
              <img
                src={headset_on}
                alt=""
                className="option"
                onClick={SpeechRecognition.stopListening}
              />
            );
          }
        })()}

        <img
          src={trash}
          alt=""
          className="option"
          onClick={() => {
            setText("");
          }}
        />
        <img src={star} alt="" className="option" />
      </div>
    </div>
  );
};

export default Options;
