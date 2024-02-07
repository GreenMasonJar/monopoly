import './board.css';
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

    function playerInfo() {
        for (let i=0; getPlayers().length; i++) {

        }
    }

    return (
        <><div className="playerInfo">
            
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
                                        <Property r={rIndex} c={cIndex}/>

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