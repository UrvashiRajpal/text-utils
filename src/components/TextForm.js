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
        navigator.clipboard.writeText(text)
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
    const[text, setText] = useState("")
    
   // setText("settext is methd to update value in text variable")
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>  
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="form-group mt-4">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#7dc5b1':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Covert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSentenceClick}>Convert to Sentence Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy the text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpace}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'gray'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in txtbox above to preview it here"}</p>
        {/* <p>{text}</p> */}
    </div>
    </>
  )
}
