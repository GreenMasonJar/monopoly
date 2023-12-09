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
                                let boxclass = "";
                                let contents = "";

                                if (rIndex === 0 || rIndex === 10 || cIndex === 0 || cIndex === 10 ) {
                                    boxclass = "theBox";
                                    if ((rIndex+cIndex)%2 === 0) {
                                        boxclass += " black"
                                    }
                                    contents = "This is the boarder"
                                } 


                                
                                return (
                                    <div
                                        className={`box ${boxclass}
                                        }`}
                                        key={cIndex}
                                    >
                                        {contents}
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