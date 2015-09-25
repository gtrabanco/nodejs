"use strict";

var express = require('express');
var router = express.Router();

var agents = require('../lib/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
    agents.find().toArray(function (error, results) {
        console.log(results);
        return res.render('mongo', {results: results});
    });

});

module.exports = router;
