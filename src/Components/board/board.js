import './board.css';
import PlayerList from './playerList';
import PlayerPawn from './playerpawn';
import Property from './property';
import { useEffect, useState } from "react";

function Board(props) {

    /**
     * Prefill players instead of hard code
     * List players on the right and highlights the current player. Hint: Object.keys(player); get value by player[key]
     * Start taking turns with dice
     */

    //What we care about
    const [chessBoard, setChessBoard] = useState([]);
    const [playerIndex, setPlayerIndex] = useState(0);

    function getPlayers() {
        return props.players;// object per player
    }

    //How we do things
    useEffect(() => {
        const n = 11;

    
        const m = 11;
        
        const result = [];

        
        for (let i = 0; i < n; i++) {

            
            const row = Array.from({ length: m });
            result.push(row);
        }

        setChessBoard(result);
    }, []);

    function renderPlayers (rIndex, cIndex){
        var returnVar = [];
        var players = getPlayers();
        for ( let i = 0; i < players.length; i++) {
            const player = players[i];
            if (player.coordinate[0] === rIndex && player.coordinate[1] === cIndex) {
                returnVar.push(<PlayerPawn player={player} />);
            }
        }
        return returnVar;
    }

    function diceRoll() {
        var doubles = false;

        //roll both dice
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //are they doubles? Yes -> count and return, no -> nothing
        if (dice1 === dice2) {
            doubles = true;
        }
        var sum = dice1 + dice2;
        //return boolian, count, and sum
        return {total:sum, isDoubles:doubles};
    }


    function playerTurn () {
        if (props.players[playerIndex].isPlaying == false) {
            setPlayerIndex((playerIndex+1)%props.players.length)
             
        } else {
            var roll = diceRoll();
            console.log("Roll = ", roll)
            //deduct $100
            // props.deduct(playerIndex, 100)
            //move pawn
            props.movePawn(playerIndex, roll)
            //buy -or- pay rent -or- action -or- nothing
            props.buySell(playerIndex)
            //purchase homes/ hotels, trade with players,

            //check if player is out 
            var isOver = props.checkGameOver(playerIndex)
            console.log(isOver)
            
            //check for end game
            var index = playerIndex
            var foundPlayer = false
            for (let i=0; i<props.players.length; i++) {
                index = (index+1)%props.players.length
                console.log(index);
                if (props.players[index].isPlaying == false) {
                    continue;
                } else foundPlayer = true;

            }
            if (!foundPlayer) {
                console.log("Game Over")
            }
            setPlayerIndex((playerIndex+1)%props.players.length)
            console.log(playerIndex);
        }
    }

    // function getProperties(propertyList) {
    //     props.getProperties(propertyList);
    // }

    return (
        <><div className="playerInfo">
            
           <PlayerList players={props.players} playerIndex={playerIndex}/> 
           <button onClick={playerTurn}>Start turn</button>
        </div>
            {chessBoard.length > 0 &&
                chessBoard.map((row, rIndex) => {
                    return (
                        <div className="row" key={rIndex}>
                            {row.map((_, cIndex) => {
                                let boxclass = "";
                                

                                if (rIndex === 0 || rIndex === 10 || cIndex === 0 || cIndex === 10 ) {
                                    boxclass = "theBox";
                                    
                                    if ((rIndex+cIndex)%2 === 0) {
                                        boxclass += " black"
                                    } 
                                    //rotate outward
                                    if (rIndex === 0) {
                                        boxclass += " rotate180";
                                    }
                                    else if (cIndex === 0) {
                                        boxclass += " rotate90";
                                    }
                                    else if (cIndex === 10) {
                                        boxclass += " rotateNeg90";
                                    } 
                                    
                                    
                                    

                                } else boxclass = "noBox";


                                
                                return (
                                    <div
                                        className={`box ${boxclass}
                                        }`}
                                        key={cIndex}
                                    >
                                        <Property r={rIndex} c={cIndex} setProperties={props.setProperties}/>

                                        {
                                            //ask for position and render if needed
                                            
                                                 renderPlayers(rIndex, cIndex)
                                            
                                           
                                            
                                        }
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </>
    );
}
    


export default Board;