const express = require('express');
const db = require('./dbConfig');
const cors = require('cors');

const app = express();

const  PORT = 5010;
app.use(cors());
app.use(express.json())

//Route to get all posts
app.get("/getObjects", (req,res)=>{
    var tempProperties = [];
    db.query("SELECT * FROM Properties", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    for (let i = 0; i < result.length; i++) {
        tempProperties.push({
            name: result[i].Property,
            price: result[i].Price,
            rent: result[i].rent,
            color: result[i].Color,
            type: result[i].Type,
            coordinates: [result[i].r_index, result[i].c_index],
        })
    }    
    res.send(tempProperties);
    });   });

app.get("/Price", (req,res)=>{
    var newArray = [];
    db.query("SELECT * FROM Properties", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    for (let i = 0; i < result.length; i++) {
        newArray.push(result[i].Price);
    }    
    res.send(newArray);
    });   });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
