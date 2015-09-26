"use strict";

var auth = require('basic-auth');

var express = require('express');
var router = express.Router();


router.use(function (request, response, next) {

    //Load the header
    var user = auth(request);

    //Check if the user exists
    if (!user || user.name !== 'access' || user.pass !== 'access') {
        //Is not a valid user

        //Set the headers
        response.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return response.send(401);
    }

    //If exists continue
    next();
});

router.get('/', function (request, response, next) {
    response.send('Restricted area');

});

module.exports = router;
