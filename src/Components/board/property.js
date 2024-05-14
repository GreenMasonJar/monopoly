import './board.css';
import React from 'react';
import './property.css';


function Property (props) {
    const r = props.r;
    const c = props.c;
    const [properties, setProperties] = React.useState([])
    
    const getData = async(url) => {
        const newData = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json());
        console.log("this is a test");
        setProperties(newData);
        console.log(newData);
        props.setProperties(properties);
        //This is in App.js, passed through props as setState :)
        //props.setProperties(newData);
    }

    // const propertyNames= ["Go", "Mediteranean Avenue", "Community Chest", "Baltic Ave", "Income Tax", "Reading Railroad", "Oriental Ave", "Chance", "Vermont Ave", "Connecticut Ave", "In Jail/ Visiting", "St. Charles Place", "Electric Co", "States Ave", "Virginia Ave", "Painsylvania Railroad", "St. James Place", "Community Chest", "Tennessee Ave", "New York Ave", "Free Parking", "Kentucky Ave", "Chance", "Indiana Ave", "Illinois Ave", "B&O Railroad", "Atlantic Ave", "Ventnor Ave", "Water Works", "Marvin Gardens", "Go to Jail", "Pacific Ave", "North Caolina Ave", "Community Chest", "Pennsylvania Ave", "Short Line", "Chance", "Park Place", "Luxury Tax", "Boardwalk"];
    // const propertyPrice = [0,60,0,60,200,200,100,0,100,120,0,140,150,140,160,200,180,0,180,200,0,220,0,220,240,200,260,260,150,280,0,300,300,0,320,200,0,350,100,400]
    React.useEffect(() => {
        getData('/getObjects');
        
        // if (properties.length === 0) {
        //     var tempProperties = []
            
            
        //     var side = 0, index = 0, i = 0, j = 0;
        

        //     while (side < 4) {
        //         //This does de work
        //         tempProperties.push(
        //             {
        //                 price: propertyPrice[index],
        //                 name: propertyNames[index++],
        //                 coordinates: [i, j],
        //             }
        //         )

        //         //go through and ++ the i or j, depending on side
        //         if(side === 0) {
        //             j++;
        //         } else if (side === 1) {
        //             i++;
        //         } else if (side === 2) {
        //             j--;
        //         } else i--;

        //         //checnge side numbers at the corners
        //         if( i === j || i + j === 10) {
        //             side++;
        //         }
                
        //     }
        //     setProperties(tempProperties);
        // }
    }, [])

    function renderProperty(){
        var display = "";
        for (let i=0; i<properties.length; i++) {
            if (properties[i].coordinate[0] === r && properties[i].coordinate[1] === c) {
                //Only display price if it's not 0
                if (properties[i].price <= 0) {
                    display = properties[i].name
                } else {
                   display = properties[i].name + " " + properties[i].price; 
                }
                
                
            }
        }
        return display;
    }

    


    return (
        <div className="propertyText">
            <label>{renderProperty()}</label>
        </div>
    )
}

export default Property;