import React from 'react'
import './popup.css'
import InputBox from '../genericComps/inputbox';
import { useState } from 'react';
import SubmitBtn from '../genericComps/submitButton';
//Popup will have info for players when starting the game. ie: number of players, their names, and what piece they will use. 

function Popup(props) {
    const [playerNames, setPlayerNames] =useState (["Player Name", "Player Name", "Player Name", "Player Name", "Player Name", "Player Name", "Player Name", "Player Name"]);

    //Submit step. Take values (players) and validate them (doo they exist, true/false)
    //Send players to App.js
    function handleSubmit(e) {
        e.preventDefault();
        
        //Creating new array that will be changed as we check business rules
        var newArray = [];

        for (let i = 0; i < playerNames.length; i++) {
            
            //If the name is the same as starting value or blank, they're not added to player list.
            if (playerNames[i] !== 'Player Name' || playerNames[i].length <1) {
                debugger;
                newArray.push(playerNames[i]);
            }
            
        }
        //send the newArray(filtered array) to App.js as playerNames
        props.getPlayerName(newArray);

        //popup goes away 
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