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
              <i
                className="fi fi-rr-headset option"
                onClick={SpeechRecognition.startListening}
              ></i>
            );
          } else {
            return (
              <i
                className="fi fi-sr-headset option"
                onClick={SpeechRecognition.stopListening}
              ></i>
            );
          }
        })()}

        <i
          className="fi fi-rr-trash option"
          onClick={() => {
            setText("");
          }}
        ></i>
        <a target="_blank" href="https://github.com/AswinAsok/editr">
          <i className="fi fi-rr-star option"></i>
        </a>
      </div>
    </div>
  );
};

export default Options;
