const express = require("express");

var app = express();

var banner = require("./routes/banner");

var imagelist = require("./routes/slider");

var merchant = require("./routes/merchant");

var listen = app.listen(3000);

const cors = require("cors");
app.use(cors({
    orign:[
        "http://127.0.0.1:8080",
        "http://localhost:8080",
        "http://172.163.4.84:8080"
],
    credentials:true
}));

app.use(express.static(__dirname+'/public'));

app.use("/banner",banner);

app.use("/imagelist",imagelist);

app.use("/merchant",merchant);

