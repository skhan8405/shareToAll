const express = require('express');
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());;

require('./src/api/index')(app);

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})
