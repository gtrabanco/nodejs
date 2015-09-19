"use strict";

var fs = require('fs');

var path = require('path');

//Open a file
//var file = '.' + '/pruebas.txt';
var file = path.join('.', 'test.txt'); //Join as ./test.txt


fs.readFile(file, {encoding:'utf8'}, function(err, data){
    if (err) {
        console.log(err);
        return;
    }

    var obj = JSON.parse(data);

    console.log(data);
    console.log(obj);

});

//Convert the content (JSON) in a object


//Using it

