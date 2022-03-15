import React from "react";
import "./Editor.css";

const Editor = ({ text, setText }) => {
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
    </div>
  );
};

export default Editor;
