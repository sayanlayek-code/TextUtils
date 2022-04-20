import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    // console.log("Changed");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("clicked");
    let Newtext = text.toUpperCase();
    setText(Newtext);
    props.showAlert("Upper Case", "success");
  };
  const handleLoClick = () => {
    // console.log("clicked");
    let Newtext = text.toLowerCase();
    setText(Newtext);
    props.showAlert("Lower Case", "success");
  };
  const handleClearClick = () => {
    // console.log("clicked");
    let Newtext = "";
    setText(Newtext);
    props.showAlert("Cleared Text", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Hola! Lets speak along with me", "success");
  };
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRange();
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
        >
          Speak
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters (Approx{" "}
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes read)
        </p>
        <h3>Preview Text</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
