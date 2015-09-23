"use strict";

//Require driver
var mysql = require('mysql');


//Configuration
var configuration = {
    host: 'didimo.es',
    user:     'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
};

var connection = mysql.createConnection(configuration);


connection.connect(function (error, data) {
    if (error) {
        console.log(error);
        throw new Error("Could not connect to database");
    }

    console.log("Connected to the database.");
});

process.on('exit', function() {
    if (connection) {
        connection.end(function() {
            console.log("Connection to database closed.");
        });
    }
    console.log("Exiting the app.");
});


module.exports = connection;