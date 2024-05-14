import './board.css';
import PlayerPawn from './playerpawn';
import Property from './property';
import { useEffect, useState } from "react";

function PlayerList(props) {

    //What we care about
   
    function getPlayers() {
        return props.players;// object per player
    }



    function renderPlayers (){
        var returnVar = [];
        var players = getPlayers();
        for ( let i = 0; i < players.length; i++) {
            const player = players[i];
            console.log(player);
            var classes = "singlePlayerInfo";

            if (i == props.playerIndex) {
                classes += " active";
            }
            if (player.isPlaying == false) {
                classes += " outOfGame"
            }
            returnVar.push(<div className={classes}>
                
                <div>
                    <b>Name: </b> {player.name}
                </div>
                <div>
                    <b>Color: </b> {player.color}
                </div>
                <div>
                    <b>Coordinates: </b> {player.coordinate}

                </div>
                <div>
                    <b>Money: $</b> {player.money}
                </div>
            </div>);
            
        }
        return returnVar;
    }

    return (
        <><div>
            {renderPlayers()}
        </div>
           
        </>
    );
}
    


export default PlayerList;