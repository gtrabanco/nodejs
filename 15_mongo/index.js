"use strict";

var mongo = require('mongoskin');

var db = mongo.db('mongodb://localhost:27017/agents');

db.collection('agents').find().toArray(function(error, results) {
    if (error) {
        throw error;
    }

    console.log(results);
});