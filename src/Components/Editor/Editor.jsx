import React from "react";
import "./Editor.css";

const Editor = ({ text, setText, stars }) => {
  return (
    <div className="editor-container">
      <div className="editor">
        <textarea
          type="text"
          className="textarea"
          placeholder="Just Starting Typing !"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
      </div>

      <div className="buttons">
        <span>{stars}</span>
        <button className="pribtn">{stars} Stars | Give a Star on GitHub</button>
        <button className="secbtn">Follow me on Instagram</button>
      </div>
    </div>
  );
};

export default Editor;
