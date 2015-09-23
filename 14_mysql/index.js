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

//Create connection
var connection = mysql.createConnection(configuration);

//Connect
connection.connect();


//Query
connection.query('SELECT * FROM agentes LIMIT 1,3', function(err, rows, fields){
    if (err) {
        return;
    }

    rows.forEach(function(row) {
        console.log(row);
    });
});
