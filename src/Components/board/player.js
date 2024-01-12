import React from 'react'


function PlayerPawn(props) {
    return(
        <>
            <div style={{ width: 20, height: 20, backgroundColor: props.player.color, color: 'white' }}>
                { props.player.name }
            </div>
        </>
    )
}

export default PlayerPawn;
