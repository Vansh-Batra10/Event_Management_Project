const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect("mongouri")

//require route
app.use("/", require("./Routes/routemodel"));

app.listen(3002, function(){
    console.log("express server is running on port 3002");
})
