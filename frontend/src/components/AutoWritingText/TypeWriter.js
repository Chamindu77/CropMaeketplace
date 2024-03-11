// TypeWriter.js
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./TypeWrite.css";

function TypeWriter({ text, loop = false, className, textStyle = {} }) {
  const [typedText] = useTypewriter({
    words: [text],
    loop: loop,
    deleteSpeed: 20,
    typeSpeed: 120,
  });

  return (
    <div className={className}>
      <h1 style={textStyle}>
        <span className="typewriter-text">{typedText}</span>
        <span>
          <Cursor cursorStyle="|" />
        </span>
      </h1>
    </div>
  );
}

export default TypeWriter;
