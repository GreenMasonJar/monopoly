import React from 'react'
import './popup.css'
//Popup will have info for players when starting the game. ie: number of players, their names, and what piece they will use. 

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup