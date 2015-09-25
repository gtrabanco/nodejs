"use strict";

var express = require('express');
var router = express.Router();

var agents = require('../lib/mongoskin');

/* GET home page. */
router.get('/', function(req, res, next) {
    agents.find().toArray(function (error, results) {
        console.log(results);
        return res.render('mongoskin', {results: results});
    });

});


module.exports = router;
