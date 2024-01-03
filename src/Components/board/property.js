import './board.css';


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
        case '1,10':
            card="Pacific Avenue";
            break;
        case '2,10':
            card="North Carolina Avenue";
            break;
        case '3,10':
            card="Community Chest";
            break;
        case '4,10':
            card="Pennsylvania Avenue";
            break;
        case '5,10':
            card="Short Line";
            break;
        case '6,10':
            card="Chance";
            break;
        case '7,10':
            card="Park Place";
            break;
        case '8,10':
            card="Luxury Tax";
            break;
        case '9,10':
            card="Boardwalk";
            break;
        case '10,10':
            card="GO! (Collect $200)";
            break;
        case '10,9':
            card="Mediteranean Avenue";
            break;
        case '10,8':
            card="Community Chest";
            break;
        case '10,7':
            card="Baltic Avenue";
            break;
        case '10,6':
            card="Income Tax";
            break;
        case '10,5':
            card="Reading Railroad";
            break;
        case '10,4':
            card="Oreiental Avenue";
            break;
        case '10,3':
            card="Chance";
            break;
        case '10,2':
            card="Vermont Avenue";
            break;
        case '10,1':
            card="Conecticut Avenue";
            break;
        case '10,0':
            card="In Jail/ Just visiting";
            break;
        case '9,0':
            card="St Charles Place";
            break;
        case '8,0':
            card="Electric Company";
            break;
        case '7,0':
            card="States Avenue";
            break;
        case '6,0':
            card="Virginia Avenue";
            break;
        case '5,0':
            card="Pennsylvania Railroad";
            break;
        case '4,0':
            card="St. James Place";
            break;
        case '3,0':
            card="Community Chest";
            break;
        case '2,0':
            card="Tennessee Avenue";
            break;
        case '1,0':
            card="New York Avenue";
            break;
        
            
            
            ///etc, etc, etc
        
        
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