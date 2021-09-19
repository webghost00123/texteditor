import React from 'react'
import { useState } from 'react';

export default function FormText(props) {
if(document.body.style.backgroundColor === "#d0eeef"){
    console.log(document.body.style.backgroundColor);
}else{
    console.log(document.body.style.backgroundColor);
}

     const [inputText, setInputText] = useState("");
     const handleChange = (e) => {
       setInputText(e.target.value);
       console.log(inputText);
     };
     const handleUpper=()=>{
         setInputText(inputText.toUpperCase())
     }
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" className="my-3">
              <h1>{props.heading}</h1>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={handleChange}
              value={inputText}
            //   style={document.body.style.backgroundColor === "#d0eeef"?{backgroundColor:'green'}:{backgroundColor:'yellow'}}
            ></textarea>
          </div>
        </form>
        <div
          className="btn-group my-3"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            onClick={handleUpper}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            All UPPER-CASE
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            all lower case
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">
            Capitilized Each Word
          </label>
        </div>
        <p>{inputText}</p>
      </div>
    );
}
