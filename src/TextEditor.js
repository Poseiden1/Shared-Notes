import React from "react";
import Quill from "quill";
import { useEffect, useRef, useCallback } from "react";
import "./TextEditor.css";

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ header: [1, 2, 3, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  ["clean"], // remove formatting button
];

export default function TextEditor() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: toolbarOptions } });
  }, []);
  return <div id="container" ref={wrapperRef}></div>;
}
