// AutoWritingText.js
import React, { useEffect, useState } from "react";
import "./AutoWritingText.css";

function AutoWritingText({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let intervalId;

    const typeText = () => {
      const currentText = texts[textIndex];
      let index = 0;

      intervalId = setInterval(() => {
        setDisplayedText((prevText) => prevText + currentText[index]);
        index++;

        if (index === currentText.length) {
          clearInterval(intervalId);

          // Wait for a moment and then reset the text
          setTimeout(() => {
            setDisplayedText("");
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            typeText(); // Start typing the next sentence
          }, 2000); // Adjust the time before resetting (milliseconds)
        }
      }, 300); // Adjust the speed of typing by changing the interval (milliseconds)
    };

    typeText(); // Start typing the first sentence

    return () => clearInterval(intervalId);
  }, [texts, textIndex]);

  return <span className="auto-writing-text">{displayedText}</span>;
}

export default AutoWritingText;
