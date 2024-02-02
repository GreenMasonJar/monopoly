import React from 'react'
import './popup.css'
import InputBox from '../genericComps/inputbox';
import Board from '../board/board';
import { useState } from 'react';
import SubmitBtn from '../genericComps/submitButton';
//Popup will have info for players when starting the game. ie: number of players, their names, and what piece they will use. 

function Popup(props) {
    const [playerNames, setPlayerNames] =useState (["a", "b", "c", "d", "e", "f", "g", "h"]);

    

    //Submit step. Take values (players) and validate them (doo they exist, true/false)
    //Send players to App.js
    function handleSubmit(e) {
        e.preventDefault();
        
        for (let i = 0; i < playerNames.length; i++) {
            
            if (playerNames[i].length < 1) {
                alert("INVALID"); //Change to show a nicer method 
                 //ends function before having to do other unnecessary work        
            }
        }
        props.getPlayerName(playerNames);

        props.setTrigger(false);
        
    }

    function valuesChange(newValues, playerNumber) {
        //make a copy
        var NewArray = [...playerNames];

        //update name
        NewArray[playerNumber] = newValues;

        //save state
        setPlayerNames(NewArray);

        //log to console
        console.log(NewArray);
        //add player to array
       
        // //send the player name submitted back to App.js
        // props.getPlayerName(playerName);    
    }

    function renderInputBox() {
        
        var inputArray = [];

        for (let i=0; i<8; i++){
           inputArray.push (<InputBox labeltext={"Player" + i} change={(newValue) => valuesChange(newValue, i)} value={playerNames[i]}/>);
        }

        return inputArray;

    }
    
//TO DO: Add a submit button and a function that loops 8 times to show 8 seperate input boxes. 
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
                <h3>Welcome to Monpoly!</h3>
                
                {renderInputBox()}
                <SubmitBtn onClick={handleSubmit}/>
            </div>
        </div>
    ) : "";
}

export default Popup;