import React from 'react';
import './App.css';
import Board from './Components/board/board'
import Popup from './Components/popup/popup';
import { useState } from 'react';
import InputBox from './Components/genericComps/inputbox';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [players, setPlayers] = useState([]);
  const [properties, setProperties] = useState([]);

  //This here is receiving the inputted player name on the popup
  //And then setting the state. 
function getPlayerName(playerNames) {
  var newPlayers = [];

  for (var i = 0; i<playerNames.length; i++) {
    newPlayers.push({
      coordinate: [0,0],
      color: 'darkred',
      money: 1500,
      name: playerNames[i],
      isPlaying: true,
      propertyOn: "",
      propertyOwned: []

    })
  }
  
  setPlayers(newPlayers)
  console.log(newPlayers);

}


//Just to test deducting til Player is out
// function deduct(playerIndex, amount) {
//   var newPLayers = [...players]

//   newPLayers[playerIndex].money-=amount;

//   setPlayers(newPLayers);
// }

function movePawn(playerIndex, roll) {
  var newPlayers = [...players]
  roll = roll.total;
  console.log("roll = ", roll);
  console.log(properties);
  var newCoor = newPlayers[playerIndex].coordinate;
  var i = 0;
  var j = 0;

  //Start with int roll. If it goes around corner/wraps, update roll and do it again. If not, move ends. 
  while(roll > 0) {
    //side 0 =[0,0] - [0,9] 
    //side1 = [0,10] - [9,10]
    //side2 = [10,10] - [10, 1] 
    //side3 = [10, 0] - [1,0]
    //Find what side it is (different sides update coordinates differently)
    if (newCoor[0] === 0 && newCoor[1] < 10) {
      var side = 0;
    } else if (newCoor[0] <10 && newCoor[1] === 10) {
      var side = 1;
    } else if (newCoor[0] === 10 && newCoor[1] > 0) {
      var side = 2;
    } else if (newCoor[0] > 0 && newCoor[1] === 0 ) {
      var side = 3;
    }

    //Move the pieces down one side
    if (side === 0) {
      j = newCoor[1] + roll;
      //If side needs to change, wrap the move
      if (j > 10) {
        roll = j - 10;
        j = 10;
      } 
      //else roll = 0, moving ends
      else roll = 0;
    } else if (side === 1) {
      i = newCoor[0] + roll;
      if (i > 10) {
        roll = i - 10;
        i = 10;
      } else roll = 0;
    } else if (side === 2) {
      j = newCoor[1] - roll;
      if (j < 0) {
        roll = 0 - j;
        j = 0;
      } else roll = 0;
    }else if (side === 3) {
      i = newCoor[0] - roll;
      if (i < 0) {
        roll = 0 - i;
        i = 0;
      } else roll = 0;
    }
    newCoor = [i, j]
  }
  
  //update coordinates for player
  newPlayers[playerIndex].coordinate = [i, j];
  //set what property they landed on...
  //debugger;
  for (let k=0; k < properties.length; k++) {
    if (newPlayers[playerIndex].coordinate[0] == properties[k].coordinate[0] && newPlayers[playerIndex].coordinate[1] == properties[k].coordinate[1]) {
      newPlayers[playerIndex].propertyOn = properties[k];
    }
  }
  setPlayers(newPlayers)
}

function buySell(playerIndex) {
  var newPlayers = [...players]
  var newProperties = [...properties]
  let currentProp = newPlayers[playerIndex].propertyOn

  //Check if it's a Property and if it's owned
  switch (currentProp.type) {
    
    case "Property":
      if (currentProp.isOwned == false) {
        //pay it
        newPlayers[playerIndex].money = newPlayers[playerIndex].money - currentProp.price;
        //Add it to owned list for player
        newPlayers[playerIndex].propertyOwned.push(currentProp.name);
        //add owner to list for Property
        currentProp.owner = newPlayers[playerIndex].name;

      } else {
        //find the owner in player array
        for (let i = 0; i < newPlayers.length; i++) {
          if (newPlayers[i].name == currentProp.owner) {
            //current player pays
            newPlayers[playerIndex].money = newPlayers[playerIndex].money - currentProp.rent;
            //owner gets payed
            newPlayers[i].money = newPlayers[i].money + currentProp.rent;
            break;
          }
        }
        
      }
      break;
    
    case "Community Chest":
      //pass
      break;

    case "Income Tax":
      //play pays tax
      break;

    case "Railroad":
      //treated like a property...
      break;

    case "Chance":
      //pass for now
      break;

    case "Jail":
      //go to jail... womp womp
      break;

    case "Electric":
      //I think treated like properties?
      break;

    case "Parking":
      //nothing happens, free space
      break;

    case "Water Works":
      //treated like property I think? 
      break;

    case "Short Line":
      //something happens idk
      break;

    case "Luxury Tax":
      //pay the tax womp womp 
      break;
  }
  for (let i=0; i < newProperties.length; i++) {
    if (currentProp.coordinate == newProperties[i].coordinate) {
      newProperties[i] = currentProp;
    }
  }
  setPlayers(newPlayers);
  setProperties(newProperties);
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
      <Board players={players} checkGameOver={checkGameOver} movePawn={movePawn} setProperties={setProperties} buySell={buySell}/>
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
