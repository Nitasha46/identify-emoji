import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥴": "Drunk or Confused",
  "😇": "Innocent",
  "😒": "Skeptic or Irritated",
  "😬": "Nervous",
  "🙃": "Silliness or Sarcasm",
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🤩": "Excited",
  "🤪": "Goofy",
  "😑": "Annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! we don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Identify the emojis! </h1>
      <input
        placeholder="Input your emoji here..."
        onChange={emojiInputHandler}
      />
      <h2>
        {" "}
        Meaning ---
        <span className="meaning"> {meaning} </span>
      </h2>

      <p className="describe">
        Below are the emojis we know. Input your emoji in the box or click on
        the emojis mentioned below to know the meaning.{" "}
      </p>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            className="showcaseEmoji"
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
