"use strict";

var mongo = require('mongoskin');

var db = mongo.db('mongodb://localhost:27017/agents');

module.exports = db.collection('agents');