"use strict";

var express = require('express');
var router = express.Router();

//Database
var mongoose = require('mongoose');
var Agent = mongoose.model('Agent');

//Get Agents
router.get('/agents', function (request, response, next) {

    var Agent = new Agent();

    console.log(Agent.find());
    response.send('Fetched all agents in console');
});

router.post('/agents', function (request, response, next) {

    var newAgent = new Agent(request.body);
    newAgent.save(function (error, created) {
        if (error) {
            console.log(error);
            return next();
        }

        //Returning the confirmation
        response.json({ok:true, agent: created});
    })
});

router.get('/version', function (request, response, next) {
    response.json({version: '1.0.0'});
});



module.exports = router;
