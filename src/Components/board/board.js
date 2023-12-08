import './board.css';
import { useEffect, useState } from "react";

function Board() {
    
    
    
    const n = 11;

    
    const m = 11;

    
    const [chessBoard, setChessBoard] = useState([]);

    useEffect(() => {

        
        const result = [];

        
        for (let i = 0; i < n; i++) {

            
            const row = Array.from({ length: m });
            result.push(row);
        }

        
        setChessBoard(result);
    }, []);

    return (
    <>
            {chessBoard.length > 0 &&
                chessBoard.map((row, rIndex) => {
                    return (
                        <div className="row" key={rIndex}>
                            {row.map((_, cIndex) => {
                                return (
                                    <div
                                        className={`box ${"theBox"}`}
                                        key={cIndex}
                                    ></div>
                                );
                            })}
                        </div>
                    );
                })}
        </>
    );
}
    


export default Board;

//Will probably make a grid board of some sort, blank out middle 
//lines so only outside squares show
//Able to do a grid, just need to show the GD lines... 