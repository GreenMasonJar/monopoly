import React from "react"



function InputBox(props) {
    function handleTextareaChange(e) {
        props.change(e.target.value);
    }  
    
    return (
        <div className="input">
        <label>{
            props.labeltext
        }: </label>
        <input type="text" setPlayerName={props.setPlayerName} onChange={handleTextareaChange} value={props.value}></input>
        </div>
  );
}

export default InputBox;