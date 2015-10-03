"use strict";

var express = require('express');
var router = express.Router();

//Database
var mongoose = require('mongoose');
var Agent = mongoose.model('Agent');


//Get Agents
router.get('/agents', function (request, response, next) {

    Agent.list({}, function (error, list) {
        if (error) {
            console.log(error);
            return response.json({ok:false, error: error});
        }

        response.json({ok:true, data: list});
    });
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


router.get('/agent/(:id)?', function (request, response, next) {
    var id = request.params.id;

    if (id && id.toLocaleLowerCase() === 'random') {
        Agent.random(function(error, row) {
            if (error) {
                console.log(error);
                next();
            }

            response.json({ok:true, data: row});
        })
    } else {
        var resultAgent = Agent.findOne({'_id': id}, function (error, row) {
            if (error) {
                console.log(error);
                return next();
            }

            response.json({ok: true, data: [row]});
        });
    }
});



router.get('/version', function (request, response, next) {
    response.json({
        version: '1.0.0'
    });
});



module.exports = router;
