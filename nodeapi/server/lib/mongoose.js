"use strict";

var mongoose = require('mongoose');

var db = mongoose.connection;


//Error handler
db.on('error', function(error){
    console.log(error);
    process.exit(1);
});

//Connection handler
db.once('open', function() {
    console.log('Connected to mongodb with mongoose');
});

//Connection to the db
mongoose.connect('mongodb://localhost:27017/agents'); //27017 is the default port
                                    //and it is not necessary to define it


//module.exports is not neccesary due to we won't use the db object