import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Conerted to upper case", "success")

    }

    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Conerted to lower case", "success")
    }

    const handleClearClick = () =>{
        let newText = ''
        setText(newText)
        props.showAlert("Cleared the text", "success")

    }

    const handleSentenceClick = () =>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Converted to Sentence case", "success")

    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied text", "success")

    }
     
    const handleSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Space", "success")

    }

    const handleOnChange = (event) =>{
        // console.log("on chnage")
        setText(event.target.value)
    }
    const[text, setText] = useState("Below in the box")
    
   // setText("settext is methd to update value in text variable")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>  
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to Sentence Case</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy the text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'gray'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in txtbox above to preview it here"}</p>
        {/* <p>{text}</p> */}
    </div>
    </>
  )
}
