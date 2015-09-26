"use strict";

var express = require('express');
var router = express.Router();

var jswt = require('jsonwebtoken');

//Check every token if the token is valid
router.get('', function (request, response, next) {
    var token = request.body.token ||
            request.query.token ||
            request.headers['x-access-token'];
    
    jswt.verify(token, 'serversupersecretpassword', function (error, decoded) {
        if (error) {
            return response.status(401).json({ok:false, error: 'Invalid session token.'});
        }
        
        console.log(decoded);
        //Authentication success
        return next(); //continue
    });
});


//Authentication
router.post('/login', function (request, response, next) {

    var user = request.headers['user'];
    var passwd = request.headers['password'];


    //Search in a database, simulated in this case
    var row = {user: 'user', password: 'user'};

    //Check the user
    if (user !== row.user || passwd !== row.password) {
        return response.status(401).json({ok:false, error: 'User not found'});
    }

    row.lastdate = new Date();

    //Auth success!
    //Send a token
    var token = jswt.sign(row, 'serversupersecretpassword', { expiresInMinutes: 1440 });
    
    response.json({ok:true, token: token});
});

router.get('/', function (request, response, next) {
    response.send('Restricted Area');
});

module.exports = router;

