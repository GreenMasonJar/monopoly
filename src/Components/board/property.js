
function Property (props) {
    const cardCoord = props.r + "," + props.c;
    let card = "";
    
    //all of the coordinates with the cards
    switch(cardCoord) {
        case '0,0':
            card = "Free Parking";
            //rent = $0
            //other methods of the propteries = whatever
            break;
        case '0,1':
            card = "Kentucky Avenue";
            //rent = x, prince = y, etc, etc, return the data back to the board. 
            break;
        case '0,2':
            card = "Chance"
            break;
        case '0,3':
            card = "Indiana Avenue";
            break;
        case '0,4':
            card = "Illinois Avenue";
            break;
        case '0,5':
            card = "B&O Railroad";
            break;
        case '0,6':
            card = "Atlantic Avenue";
            break;
        case '0,7':
            card = "Ventnor Avenue";
            break;
        case '0,8':
            card = "Water Works";
            break;
        case '0,9':
            card = "Marvin Gardens";
            break;
        case '0,10':
            card = "Go to Jail";
            break;
        default:
            //nothing probably?
            break;

            ///etc, etc, etc
    }

    return (
        <div>
            <label>{card}</label>
        </div>
    )
}

export default Property;