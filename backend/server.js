const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

const studentRouter = require("./routes/students.js");
app.use("/student",studentRouter);

// to use static files like css, pics, other assets 
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to the database");
    app.listen(process.env.PORT,()=>{
        console.log("Listening to the port",process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err);
})

