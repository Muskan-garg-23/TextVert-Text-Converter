import React, { useState } from "react";

export default function About(props) {
  // const [myStyle,setmyStyle]=useState({
  //   color:'black',
  //   backgroundColor: 'white',
  // })

  // const [btnText,setbtnText]=useState("Enable dark mode");
  //  const toggle =() =>{
  //   if(myStyle.color==="black"){
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black',

  //     }
  //     )
  //     setbtnText("Enable light mode")
  //   }
  //   else{
  //     setmyStyle({
  //       color:"black",
  //       backgroundColor:"white",

  //     })
  //     setbtnText("Enable dark mode")
  //   }
  //  }

  let myStyle = {
    backgroundColor: props.col==='blue'?'#3faae8e7': (props.col==='grey'?'#5C5470': props.col==='red'?'#EF9595':props.col==='yellow'?'#FFB000':props.mode==='light'?'white':'#93B1A6'),
    color: props.mode === "light" ? "black" : "#FAF1E4",
  };

  let myStyle2 = {
    backgroundColor:props.col==='blue'?'#a0d5f4e7': (props.col==='grey'?'#a7a3a3': props.col==='red'?'#e5a69586':props.col==='yellow'?'#e2eaa3ed': props.mode === "light" ? "white" : "#B0D9B1"),
  };

  return (
    <>
      <div className="container">
        <h1 className="my-3 mx-3">About Us</h1>
        <div
          className="accordion accordion-flush mx-3 my-2"
          id="accordionFlushExample"
        >
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true"
                aria-controls="flush-collapseOne"
              >
                TEXTVERT-Description
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              style={myStyle2}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
               A Text Converter App where you can write any text and convert 
               it into Uppercase or Lowercase or can count words and characters
               in it.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Know the Buttons
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              style={myStyle2}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">

               <b>Convert To Uppercase :</b> It will convert all your text characters into uppercase. <br></br>
               <b>Convert To Lowercase :</b> It will convert all your text characters into lowercase. <br></br>
               <b>Clear :</b> It will empty your textbox. <br></br>
               <b>Speak :</b> It will convert your text into an audio. <br></br>
               <b>Copy Text :</b> It will copy your text into clipboard. <br></br>
               <b>Remove Extra Spaces :</b> It will clear all the extra spaces <code> (more than one) </code>
               from your text. <br></br>
               <b>Change Font :</b> It will change your font from normal to italics and italics to normal
               of your text.

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Future Ideas
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              style={myStyle2}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                There are lots of another options coming in future for eg- translate to hindi
               
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
        <button className="btn btn-primary my-3" onClick={toggle} >{btnText}</button>
        </div> */}
      </div>
    </>
  );
}
