import React, { useState } from "react";

export default function TextForm(props) {
  
  const ConvertToUp = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const ConvertToLo = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

 

  const Clear =()=>{
      const newText = "";
      setText(newText);
  }
  const [text, setText] = useState('');
//   const text1 = setText(text);

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          onChange={handleOnChange}
          value={text}
          rows="9"
          placeholder="Enter text here"
        ></textarea>
        <button className="btn btn-primary mx-2 my-1" onClick={ConvertToUp}>
          ChangeToUpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={ConvertToLo}>
          ChangeToLowerCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={Clear}>
          Clear
        </button>

        
        
      </div>

      <div className="container contain">
          <h2> <b> Your summary is here </b></h2>
          <p> {text.split(" ").length} words and {text.length} characters</p>
          <p> {0.08 * text.split(" ").length} minutes read</p>
          
          <h3><b> Preview</b> </h3>
          <p>{text}</p>
      </div>
    </>
  );
}
