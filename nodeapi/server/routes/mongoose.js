"use strict";

var router = require('express').Router();

//Get the model
require('../models/Agent');


router.get('/', function (request, response, next) {

    //Create a new Agent
    var Agent = require('../models/Agent');

    /* //Create a new row
    var newAgent = new Agent({name:'New', age:18});
    newAgent.save(function (error, created) {
        if (error) {
            console.log(error);
            return next(error);
        }

        console.log(created);
        response.send('Created a new insert: ' + created.fullInfo());
    });
    //*/
});



module.exports = router;