import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function Textform(props) {
  const handleUp = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLow = () => {
    console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    console.log("button clicked");
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "hi-IN";
    window.speechSynthesis.speak(msg);
    props.showAlert("Audio is activated", "success");
  };

  const handleCopy = () => {
    // let t=document.getElementById("exampleFormControlTextarea1");
    // t.select();
    // navigator.clipboard.writeText(t.value);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const changeFont = () => {
    console.log("clicked");
    // let newText = text;
    // setFontFamily(fontFamily === "Arial" ? "cursive" : "Arial");
    // setText(newText);
    if (mystyle.fontStyle === "normal") {
      setmystyle({ fontStyle: "italic" });
      setisFontStyle(!isFontStyle);
      props.showAlert("Changed to italics", "success");
    } else {
      setmystyle({ fontStyle: "normal" });
      setisFontStyle(!isFontStyle);
      props.showAlert("Changed to normal", "success");
    }
  };

  //   const handleHindi = () => {
  //     axios
  //       .post(`https://libretranslate.de/detect`, {
  //         q: text,
  //       })
  //       .then((response) => {
  //         setdetectedLanguageKey(response.data[0].language);
  //       });
  //   };

  //   useEffect(() => {
  //     axios.get(`https://libretranslate.de/languages`)
  //     .then((response) => {
  //      setLanguagesList(response.data)
  //     })

  //     getLanguageSource()
  //  }, [text]);

  //   const languageKey = (selectedLanguage) => {
  //     setLanguageKey(selectedLanguage.target.value);
  //   };

  //   const translateText = () => {
  //     getLanguageSource();

  //     let data = {
  //       q: text,
  //       source: detectLanguageKey,
  //       target: selectedLanguageKey,
  //     };
  //     axios.post(`https://libretranslate.de/translate`, data).then((response) => {
  //       setText(response.data.translatedText)
  //     });
  //   };

  const handleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  const [isFontStyle, setisFontStyle] = useState(true);
  const [mystyle, setmystyle] = useState({
    fontStyle: "normal",
    color: "#5C4B99",
  });
  const [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const [selectedLanguageKey, setLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);

  let myStyle = {
    backgroundColor:
      props.col === "blue" 
        ? "#3faae8e7"
        : props.col === "grey"
        ? "#5C5470"
        : props.col === "red"
        ? "#EF9595"
        : props.col === "yellow"
        ? "#FFB000"
        : props.col === "dark"
        ? "#93B1A6"
        : "white",
    color: props.mode === "light" ? "black" : "#FAF1E4",
    fontStyle : isFontStyle ? "normal" : "italic"
  };

  return (
    <>
      <h1> {props.heading}</h1>
      <div className="container">
        <h1 className="heading">TEXTVERT-Text Converter</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={myStyle}
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor: props.col === "grey" || "red" ? "black" : "blue",
          }}
          onClick={handleUp}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          onClick={handleLow}
        >
          {" "}
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          onClick={handleClear}
        >
          {" "}
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          onClick={handleSpeak}
        >
          {" "}
          Speak
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          onClick={handleCopy}
        >
          {" "}
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          onClick={handleSpaces}
        >
          {" "}
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary "
          onClick={changeFont}
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          type="button"
          // data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Change Font
        </button>
        {/* <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul> */}
        {/* <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1"
          style={{
            backgroundColor:
              props.col === "grey"
                ? "#5C5470"
                : props.col === "red"
                ? "#EF9595"
                : props.col === "yellow"
                ? "#FFB000"
                : props.col === "dark"
                ? "#93B1A6"
                : "#3876BF",
            borderColor:
              props.col === "grey" || "red"
                ? "black"
                : "blue"
                ? "black"
                : "blue",
          }}
          onClick={handleCopy}
        >
          Translate to Hindi
        </button> */}
        <div className="conatiner my-4">
          {/* <pre> */}
          <h2>
            {" "}
            Your Text Summary :
            {/* {text.length<=0?"0":String(text.trim()).split(" ").length}  */}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters{" "}
          </h2>
          <h3>
            {" "}
            Time to read text :{" "}
            {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length * (0.008).toFixed(2)}{" "}
            min{" "}
          </h3>
          <h4> Preview :</h4>
          <p className="preview" style={mystyle}>
            {" "}
            {text.length > 0 ? text : "Enter Something in the textbox"}
          </p>

          {/* </pre> */}
        </div>
      </div>
    </>
  );
}
