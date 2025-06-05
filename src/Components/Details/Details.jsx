import React from "react";
import "./Details.css";

const Details = ({
  words,
  characters,
  special,
  listening,
  browserSupportsSpeechRecognition,
}) => {
  return (
    <div className="details-container">
      <div className="details">
        <div className="count-container">
          <p className="heading">Editr Statistics</p>
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

        <div className="microphone-container">
          <p className="heading">Microphone Input Status</p>
          {(() => {
            if (!browserSupportsSpeechRecognition) {
              return (
                <p className="nospeech">
                  This browser doesn't support <br />
                  <span>Speech Recognition !</span>.
                </p>
              );
            } else if (!listening) {
              return (
                <div className="indicators">
                  <div className="on">
                    <div className="indicator"></div>Mic On
                  </div>

                  <div className="listening">
                    <div className="indicator"></div>Listening..
                  </div>

                  <div className="off">
                    <div className="indicator not-working"></div>Mic Off
                  </div>
                </div>
              );
            } else {
              return (
                <div className="indicators">
                  <div className="on">
                    <div className="indicator working"></div>Mic On
                  </div>

                  <div className="listening">
                    <div className="indicator working"></div>Listening..
                  </div>

                  <div className="off">
                    <div className="indicator "></div>Mic Off
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Details;
