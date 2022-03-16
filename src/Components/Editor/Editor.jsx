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
        <button className="pribtn">
          {stars} Stars <i class="fi fi-brands-github"></i>
        </button>
        <button className="secbtn">Follow me on <i class="fi fi-brands-twitter"></i></button>
      </div>
    </div>
  );
};

export default Editor;
