import React from "react";
import "./Editor.css";

const Editor = () => {
  return (
    <div className="editor-container">
      <div className="editor">
        <textarea
          type="text"
          className="textarea"
          placeholder="Just Starting Typing !"
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
