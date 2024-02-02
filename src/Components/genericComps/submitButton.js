import React from "react"



function SubmitBtn(props) {
    
    
    return(
        <div>
           <input type="submit" value="Click or submit or something" onClick={props.onClick}></input> 
        </div>
        
        
    );
}

export default SubmitBtn;