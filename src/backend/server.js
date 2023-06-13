const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect("mongodb+srv://batravansh162:2r0AEX0oxgQ2JMpz@cluster0.hnplbfa.mongodb.net/Fiesta")

//require route
app.use("/", require("./Routes/routemodel"));

app.listen(3002, function(){
    console.log("express server is running on port 3002");
})