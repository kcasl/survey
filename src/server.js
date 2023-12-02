const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 80;
const db = require('../server/config/db.js');
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())

app.post('/send', (req, res) => {
    console.log('/send')
    const json = req.body;
    const name = json.name
    const personalnum = json.personalnum
    const asbl = json.asbl
    const email = json.email
    const needs = json.needs
    db.query('INSERT INTO survey (name, personal_number, ASBL, email, needs) VALUES (?, ?, ?, ?, ?)',[name, personalnum, asbl, email, needs],(err,data) =>{
        if(!err){
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server On/`);
})
