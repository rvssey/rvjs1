const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 3000;

//Middlewares
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors())

mongoose.connect(process.env.DATABASE, {useNewUrlParser:true, useUnifiedTopology:true,}).then(()=>{
    console.log("db Connected Successfully");
});

//Server Connecting
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:$(port)`);
});

