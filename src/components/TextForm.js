import React, { useState } from "react";

export default function TextForm(props) {
  const handUpClick = () => {
    // console.log("upperupper case was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handLowClick = () => {
    // console.log("upperupper case was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearClick = () => {
    
    let newText = '';
    setText(newText);
    props.showAlert(" Text is cleared ", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("Text is copied to clipboard ", "success");
  };


  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space is removed ", "success");
  }

  const [text, setText] = useState("");
  //   text ="new text"; // wrong way to change the state

  //   setText("new text");

  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handUpClick}>
          convert to uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handLowClick}>
          convert to lowercase
        </button>

        
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          copy text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
           Remove extra spaces
        </button>

      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2> Your text summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something"}</p>
      </div>
    </>
  );
}
