import React from 'react';
import './App.css';
import Board from './Components/board/board'
import Popup from './Components/popup/popup';
import { useState } from 'react';
import InputBox from './Components/genericComps/inputbox';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [players, setPlayers] = useState([]);
  

  //This here is receiving the inputted player name on the popup
  //And then setting the state. 
function getPlayerName(playerNames) {
  var newPlayers = [];

  for (var i = 0; i<playerNames.length; i++) {
    newPlayers.push({
      coordinate: [0,0],
      color: 'darkred',
      money: 100+(200*i),
      name: playerNames[i],
      isPlaying: true
    })
  }
  
  setPlayers(newPlayers)
  console.log(newPlayers);

}

function deduct(playerIndex, amount) {
  var newPLayers = [...players]

  newPLayers[playerIndex].money-=amount;

  setPlayers(newPLayers);
}

//check to see if game is over for player
function checkGameOver(playerIndex) {
  

  if (players[playerIndex].money <= 0) {
    var newPlayers = [...players]

    newPlayers[playerIndex].isPlaying = false;

    setPlayers(newPlayers)
    return true
  }
  return false
}
//function receives/"catches" the example data
//Functin then console logs the exmaple date it receives
function eventExample (exampleData) { 
  console.log(exampleData);

}
  return (
    <div>
      <Board players={players} deduct={deduct} checkGameOver={checkGameOver}/>
      {
      !players.length ? 
      <button onClick={() => setButtonPopup(true)}>Start Game</button>: null
}
      { /*we then pass the reference data/ function (the address of it) to the Popup component as eventExample (see valuesChange on Popup for further notes)*/ }
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} getPlayerName={getPlayerName}/>
      
        
      
    </div>
  );
}

export default App;
