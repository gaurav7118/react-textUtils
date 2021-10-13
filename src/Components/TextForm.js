import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event)=>{            
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
         setText(text.toUpperCase());
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
   }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Text Area</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" row="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert To LowerCase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text === '' ? text.split(" ").length-1 : text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
