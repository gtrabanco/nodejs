"use strict";

var express = require("express");

//Create an Express' app
var app = express();

//Listen petitions at /
app.get('/', function (request, response){
    console.log("New petition");
    response.send("Response!!");
});

//Configureing the listener
var server = app.listen(3000, function(){
    var address = server.address().address;
    var port    = server.address().port;

    console.log("Listening at http://%s:%d/", address, port);
});
