import './board.css';
import React from 'react';
import './property.css';


function Property (props) {
    const r = props.r;
    const c = props.c;
    const [properties, setProperties] = React.useState([])
    
    const propertyNames= ["Go", "Mediteranean Avenue", "Community Chest", "Baltic Ave", "Income Tax", "Reading Railroad", "Oriental Ave", "Chance", "Vermont Ave", "Connecticut Ave", "In Jail/ Visiting", "St. Charles Place", "Electric Co", "States Ave", "Virginia Ave", "Painsylvania Railroad", "St. James Place", "Community Chest", "Tennessee Ave", "New York Ave", "Free Parking", "Kentucky Ave", "Chance", "Indiana Ave", "Illinois Ave", "B&O Railroad", "Atlantic Ave", "Ventnor Ave", "Water Works", "Marvin Gardens", "Go to Jail", "Pacific Ave", "North Caolina Ave", "Community Chest", "Pennsylvania Ave", "Short Line", "Chance", "Park Place", "Luxury Tax", "Boardwalk"];
    React.useEffect(() => {
        if (properties.length === 0) {
            var tempProperties = []
            
            var side = 0, index = 0, i = 0, j = 0;
        

            while (side < 4) {
                //This does de work
                tempProperties.push(
                    {
                        name: propertyNames[index++],
                        coordinates: [i, j]
                    }
                )

                //go through and ++ the i or j, depending on side
                if(side === 0) {
                    j++;
                } else if (side === 1) {
                    i++;
                } else if (side === 2) {
                    j--;
                } else i--;

                //checnge side numbers at the corners
                if( i === j || i + j === 10) {
                    side++;
                }
                
            }
            setProperties(tempProperties);
        }
    }, [])

    function renderProperty(){
        var display = "";
        for (let i=0; i<properties.length; i++) {
            if (properties[i].coordinates[0] === r && properties[i].coordinates[1] === c) {
                display = properties[i].name;
            }
        }
        return display;
    }

    return (
        <div>
            <label>{renderProperty()}</label>
        </div>
    )
}

export default Property;